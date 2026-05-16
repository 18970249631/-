import { useState, useEffect } from 'react';
import { Menu, X, Search, BookOpen, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { name: '首页', path: '/' },
  { name: '历史频道', path: '/history' },
  { name: '文化频道', path: '/culture' },
  { name: '学术研究', path: '/academic' },
  { name: '互动社区', path: '/community' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-[#C8102E] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <BookOpen className="w-8 h-8 text-yellow-400" />
            <span className="text-white font-serif text-xl font-bold">中国文史网</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`text-white hover:text-yellow-400 transition-colors font-medium ${
                  location.pathname === item.path ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="搜索历史资讯..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 rounded-full text-gray-800 focus:outline-none"
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </form>
            <button className="text-white hover:text-yellow-400 transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-800">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-left text-white hover:bg-red-800 transition-colors ${
                    location.pathname === item.path ? 'bg-red-800' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <form onSubmit={handleSearch} className="mt-4 px-4">
              <input
                type="text"
                placeholder="搜索历史资讯..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none"
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
