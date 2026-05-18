import json
import os
from typing import Dict, List, Set, Optional
from dataclasses import dataclass
from enum import Enum

class ThreatLevel(Enum):
    CLEAN = "clean"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

@dataclass
class ThreatSignature:
    name: str
    type: str
    description: str
    md5: str
    sha256: str

@dataclass
class ScanResult:
    file_path: str
    threat_level: ThreatLevel
    threat_name: Optional[str]
    threat_type: Optional[str]
    description: str
    details: Dict

class SignatureDatabase:
    def __init__(self, db_path: str):
        self.db_path = db_path
        self.signatures: List[ThreatSignature] = []
        self.md5_set: Set[str] = set()
        self.sha256_set: Set[str] = set()
        self.patterns: Dict = {}
        self._load_database()

    def _load_database(self):
        if not os.path.exists(self.db_path):
            raise FileNotFoundError(f"Signature database not found: {self.db_path}")
        
        with open(self.db_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        self.signatures = []
        for sig in data.get('signatures', []):
            signature = ThreatSignature(
                name=sig['name'],
                type=sig['type'],
                description=sig['description'],
                md5=sig['md5'].lower(),
                sha256=sig['sha256'].lower()
            )
            self.signatures.append(signature)
            self.md5_set.add(signature.md5)
            self.sha256_set.add(signature.sha256)
        
        self.patterns = data.get('heuristic_patterns', {})
    
    def check_hash(self, md5: str, sha256: str) -> Optional[ThreatSignature]:
        md5_lower = md5.lower()
        sha256_lower = sha256.lower()
        
        for sig in self.signatures:
            if sig.md5 == md5_lower or sig.sha256 == sha256_lower:
                return sig
        return None
    
    def get_suspicious_keywords(self) -> List[str]:
        return self.patterns.get('suspicious_keywords', [])
    
    def get_suspicious_extensions(self) -> List[str]:
        return self.patterns.get('suspicious_extensions', [])
    
    def get_double_extensions(self) -> List[str]:
        return self.patterns.get('double_extensions', [])
