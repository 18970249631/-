import { useState } from 'react';
import { Search, Filter, Calendar, BookOpen, User } from 'lucide-react';
import { mockPapers } from '../data/mockData';

export default function AcademicPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterYear, setFilterYear] = useState('');

  const filteredPapers = mockPapers.filter((paper) => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesYear = !filterYear || paper.publishDate.startsWith(filterYear);
    return matchesSearch && matchesYear;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-800 mb-2">学术研究</h1>
        <p className="text-gray-500">汇聚学术前沿成果，推动历史研究交流</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索论文标题、作者或关键词..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#C8102E] focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C8102E] focus:outline-none"
          >
            <option value="">全部年份</option>
            <option value="2024">2024年</option>
            <option value="2023">2023年</option>
            <option value="2022">2022年</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {filteredPapers.map((paper) => (
            <div key={paper.id} className="card p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-800 mb-2">{paper.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{paper.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{paper.journal}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{paper.publishDate}</span>
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{paper.abstract}</p>
              <div className="flex flex-wrap gap-2">
                {paper.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-red-50 text-[#C8102E] text-xs px-3 py-1 rounded-full"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h3 className="font-serif font-bold text-gray-800 mb-4">学术期刊导航</h3>
            <div className="space-y-2">
              {['历史研究', '考古学报', '中国史研究', '近代史研究', '世界历史', '史学理论研究'].map((journal, index) => (
                <button
                  key={index}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 transition-colors text-gray-700"
                >
                  {journal}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-serif font-bold text-gray-800 mb-4">学术动态</h3>
            <div className="space-y-3">
              {[
                { title: '第25届中国史学理论研讨会召开', date: '2024-07-05' },
                { title: '新出土简牍研究取得重大突破', date: '2024-07-03' },
                { title: '数字化技术助力历史研究', date: '2024-06-28' },
                { title: '中外学者共议丝绸之路研究', date: '2024-06-25' },
              ].map((item, index) => (
                <div key={index} className="flex items-start justify-between">
                  <button className="text-left text-sm text-gray-700 hover:text-[#C8102E] transition-colors flex-1">
                    {item.title}
                  </button>
                  <span className="text-xs text-gray-400 ml-2">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
