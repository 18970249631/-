import { Clock, User } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onClick?: () => void;
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <div
      className="card card-hover cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-2/3 p-4 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-red-100 text-[#C8102E] text-xs px-2 py-1 rounded mb-2">
              {article.category}
            </span>
            <h3 className="font-serif font-semibold text-lg text-gray-800 hover:text-[#C8102E] transition-colors mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2 mb-3">
              {article.summary}
            </p>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{article.source}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{article.publishTime}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
