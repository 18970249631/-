import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, BookOpen } from 'lucide-react';
import { mockDynasties, mockPersons } from '../data/mockData';

export default function HistoryChannel() {
  const [activeTab, setActiveTab] = useState<'dynasties' | 'persons'>('dynasties');
  const navigate = useNavigate();

  const formatYear = (year: number) => {
    if (year < 0) {
      return `公元前${Math.abs(year)}年`;
    }
    return `公元${year}年`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-800 mb-2">历史频道</h1>
        <p className="text-gray-500">探索中国五千年文明历史，了解各个朝代的兴衰变迁</p>
      </div>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('dynasties')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            activeTab === 'dynasties'
              ? 'bg-[#C8102E] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span>朝代纪年</span>
        </button>
        <button
          onClick={() => setActiveTab('persons')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            activeTab === 'persons'
              ? 'bg-[#C8102E] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Users className="w-5 h-5" />
          <span>历史人物</span>
        </button>
      </div>

      {activeTab === 'dynasties' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDynasties.map((dynasty) => (
            <div
              key={dynasty.id}
              className="card p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/history/dynasty/${dynasty.id}`)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-xl font-bold text-gray-800">{dynasty.name}</h3>
                <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">
                  {formatYear(dynasty.startYear)} - {formatYear(dynasty.endYear)}
                </span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">{dynasty.description}</p>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">代表帝王</h4>
                <div className="flex flex-wrap gap-2">
                  {dynasty.featuredEmperors.map((emperor, index) => (
                    <span
                      key={index}
                      className="bg-red-50 text-[#C8102E] text-xs px-2 py-1 rounded"
                    >
                      {emperor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPersons.map((person) => (
            <div
              key={person.id}
              className="card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/history/person/${person.id}`)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-bold text-gray-800">{person.name}</h3>
                  <span className="text-xs text-gray-400">{person.dynasty}</span>
                </div>
                <p className="text-[#C8102E] text-sm font-medium mb-2">{person.role}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {person.achievements.slice(0, 3).map((achievement, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm line-clamp-2">{person.biography}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <BookOpen className="w-10 h-10 text-[#C8102E] flex-shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-bold text-gray-800 mb-2">历史学习指南</h3>
            <p className="text-gray-600 text-sm">
              中国历史悠久，从远古文明到现代社会，经历了多个朝代的更迭。通过学习历史，我们可以了解前人的智慧和经验，更好地理解当下的社会和文化。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
