import { FileText } from 'lucide-react';
import { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  onClick?: () => void;
}

export default function TopicCard({ topic, onClick }: TopicCardProps) {
  return (
    <div
      className="card card-hover cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={topic.coverImage}
          alt={topic.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-serif font-bold text-xl mb-1">{topic.name}</h3>
        <p className="text-gray-300 text-sm mb-2 line-clamp-1">{topic.description}</p>
        {topic.articleCount && (
          <span className="inline-flex items-center text-yellow-400 text-xs">
            <FileText className="w-4 h-4 mr-1" />
            {topic.articleCount}篇文章
          </span>
        )}
      </div>
    </div>
  );
}
