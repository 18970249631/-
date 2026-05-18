import os
import re
from typing import List, Tuple, Dict
from signature_database import SignatureDatabase, ThreatLevel

class HeuristicEngine:
    def __init__(self, signature_db: SignatureDatabase):
        self.signature_db = signature_db
    
    def analyze_file(self, file_path: str, content: bytes = None) -> Tuple[ThreatLevel, str, List[str]]:
        threats = []
        score = 0
        reasons = []
        
        reasons.append(self._check_filename(file_path))
        if reasons[-1]:
            score += 20
            threats.append(reasons[-1])
        
        if content:
            reasons.append(self._check_file_size(file_path))
            if reasons[-1]:
                score += 10
            
            content_str = content.decode('utf-8', errors='ignore') if len(content) < 10*1024*1024 else ""
            
            for check in [self._check_suspicious_keywords,
                         self._check_powershell_indicators,
                         self._check_command_injection,
                         self._check_network_indicators]:
                result = check(content_str, content)
                if result:
                    threats.append(result)
                    score += 15
        
        threat_level = self._calculate_threat_level(score)
        return threat_level, threats[0] if threats else "No threats detected", threats
    
    def _check_filename(self, file_path: str) -> str:
        filename = os.path.basename(file_path).lower()
        ext = os.path.splitext(filename)[1].lower()
        
        double_exts = self.signature_db.get_double_extensions()
        for double_ext in double_exts:
            if filename.endswith(double_ext):
                return f"Suspicious double extension detected: {filename}"
        
        suspicious_exts = self.signature_db.get_suspicious_extensions()
        if ext in suspicious_exts:
            if filename.startswith('.'):
                return f"Hidden executable file detected: {filename}"
            
            if any(char.isupper() for char in filename):
                parts = filename.split('.')
                if len(parts) > 2:
                    for i, part in enumerate(parts[:-1]):
                        if part and part[0].isupper():
                            return f"Executable with mixed-case name detected: {filename}"
                            break
        
        return ""
    
    def _check_file_size(self, file_path: str) -> str:
        try:
            size = os.path.getsize(file_path)
            
            if size == 0:
                return "Empty file detected"
            
            if size < 100:
                return f"Very small executable file ({size} bytes) - potentially suspicious"
            
            if size > 100 * 1024 * 1024:
                return f"Very large file ({size / (1024*1024):.1f} MB)"
                
        except Exception:
            pass
        
        return ""
    
    def _check_suspicious_keywords(self, content_str: str, content: bytes) -> str:
        keywords = self.signature_db.get_suspicious_keywords()
        found_keywords = []
        
        for keyword in keywords:
            if keyword.lower() in content_str.lower():
                found_keywords.append(keyword)
        
        if len(found_keywords) >= 3:
            return f"Suspicious keywords found: {', '.join(found_keywords[:5])}"
        
        return ""
    
    def _check_powershell_indicators(self, content_str: str, content: bytes) -> str:
        powershell_patterns = [
            r'powershell.*-enc',
            r'powershell.*-encodedcommand',
            r'Net\.WebClient',
            r'DownloadString',
            r'DownloadFile',
            r'Invoke-WebRequest',
            r'Invoke-Expression'
        ]
        
        content_lower = content_str.lower()
        
        for pattern in powershell_patterns:
            if re.search(pattern, content_lower, re.IGNORECASE):
                return "PowerShell suspicious command patterns detected"
        
        return ""
    
    def _check_command_injection(self, content_str: str, content: bytes) -> str:
        injection_patterns = [
            r';\s*rm\s+-rf',
            r';\s*del\s+/[fqs]',
            r'\|\s*sh',
            r'&&\s*rm',
            r'format\s+[a-z]:',
            r'\\\\.*\\\\.*\\\\',
        ]
        
        for pattern in injection_patterns:
            if re.search(pattern, content_str, re.IGNORECASE):
                return "Potential command injection pattern detected"
        
        return ""
    
    def _check_network_indicators(self, content_str: str, content: bytes) -> str:
        network_patterns = [
            r'https?://[^\s]+\.exe',
            r'ftp://[^\s]+',
            r'socket\.connect',
            r'http\.request',
            r'urllib\.request',
            r'requests\.get',
            r'WinHttp\.WinHttpRequest',
            r'MSXML2\.XMLHTTP'
        ]
        
        matches = []
        for pattern in network_patterns:
            if re.search(pattern, content_str, re.IGNORECASE):
                matches.append(pattern)
        
        if len(matches) >= 2:
            return "Multiple network request patterns detected"
        
        return ""
    
    def _calculate_threat_level(self, score: int) -> ThreatLevel:
        if score >= 60:
            return ThreatLevel.CRITICAL
        elif score >= 40:
            return ThreatLevel.HIGH
        elif score >= 25:
            return ThreatLevel.MEDIUM
        elif score >= 10:
            return ThreatLevel.LOW
        else:
            return ThreatLevel.CLEAN
