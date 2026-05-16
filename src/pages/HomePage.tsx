import { useNavigate } from 'react-router-dom';
import { Newspaper, BookMarked, Users } from 'lucide-react';
import BannerCarousel from '../components/BannerCarousel';
import ArticleCard from '../components/ArticleCard';
import TopicCard from '../components/TopicCard';
import { mockBanners, mockHeadlines, mockLatestNews, mockTopics } from '../data/mockData';

export default function HomePage() {
  const navigate = useNavigate();

  const handleArticleClick = (id: string) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-10">
        <BannerCarousel banners={mockBanners} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Newspaper className="w-6 h-6 text-[#C8102E]" />
              <h2 className="font-serif text-2xl font-bold text-gray-800">头条新闻</h2>
              <span className="bg-[#C8102E] text-white text-xs px-2 py-1 rounded">最新</span>
            </div>
            <div className="space-y-4">
              {mockHeadlines.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={() => handleArticleClick(article.id)}
                />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <BookMarked className="w-6 h-6 text-[#C8102E]" />
                <h2 className="font-serif text-2xl font-bold text-gray-800">历史资讯</h2>
              </div>
              <button className="text-[#C8102E] hover:text-red-700 text-sm font-medium">
                查看更多 →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockLatestNews.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={() => handleArticleClick(article.id)}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-6 h-6 text-[#C8102E]" />
              <h2 className="font-serif text-xl font-bold text-gray-800">专题推荐</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {mockTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onClick={() => navigate(`/topic/${topic.id}`)}
                />
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-serif font-bold text-lg text-gray-800 mb-4">历史上的今天</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">7月6日</span>
                <span className="text-sm text-gray-500">良渚古城申遗成功</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">7月7日</span>
                <span className="text-sm text-gray-500">卢沟桥事变</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">7月8日</span>
                <span className="text-sm text-gray-500">郑和首次下西洋</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">7月9日</span>
                <span className="text-sm text-gray-500">虎门销烟开始</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
