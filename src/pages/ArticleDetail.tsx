import { useParams } from 'react-router-dom';
import { Heart, Share2, MessageCircle, Bookmark, Clock, User } from 'lucide-react';
import { mockHeadlines, mockComments } from '../data/mockData';
import { useState } from 'react';

export default function ArticleDetail() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [commentText, setCommentText] = useState('');
  
  const article = mockHeadlines.find((a) => a.id === id) || mockHeadlines[0];
  const articleComments = mockComments.filter((c) => c.articleId === id) || mockComments;

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setCommentText('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="h-64 md:h-80 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6 md:p-10">
          <span className="inline-block bg-red-100 text-[#C8102E] text-xs px-3 py-1 rounded-full mb-4">
            {article.category}
          </span>
          
          <h1 className="font-serif text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
            <span className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>{article.source}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{article.publishTime}</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-4 mb-8">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              <span>{liked ? '已点赞' : '点赞'}</span>
            </button>
            
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                bookmarked ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
              <span>{bookmarked ? '已收藏' : '收藏'}</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-all">
              <Share2 className="w-5 h-5" />
              <span>分享</span>
            </button>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg mb-6">{article.summary}</p>
            
            <p className="mb-4">
              中国是世界上历史最悠久的国家之一，拥有五千年灿烂文明。良渚古城遗址的发现，为我们了解中华文明的起源提供了重要的实物证据。
            </p>
            
            <p className="mb-4">
              2019年7月6日，在阿塞拜疆巴库举行的第43届世界遗产大会上，中国良渚古城遗址获准列入世界遗产名录。这一重大事件标志着中华五千年文明史得到了国际社会的广泛认可。
            </p>
            
            <h2 className="font-serif text-xl font-bold text-gray-800 mt-8 mb-4">良渚古城的发现历程</h2>
            
            <p className="mb-4">
              良渚古城遗址位于浙江省杭州市余杭区，是长江下游地区首次发现的新石器时代城址。自1936年首次发现以来，经过几代考古工作者的不懈努力，这座沉睡了五千年的古城逐渐揭开了神秘面纱。
            </p>
            
            <p className="mb-4">
              考古发现表明，良渚古城是一个具有完整都城结构的早期国家形态，拥有宫殿区、内城、外城三重结构，总面积达300万平方米。城内还发现了大型水利系统、祭坛、墓葬等重要遗迹。
            </p>
            
            <h2 className="font-serif text-xl font-bold text-gray-800 mt-8 mb-4">申遗成功的意义</h2>
            
            <p className="mb-4">
              良渚古城遗址的申遗成功，不仅是对中国考古工作的高度认可，更是对中华文明悠久历史的有力证明。它向世界展示了中国在五千年前就已经拥有了高度发达的文明。
            </p>
            
            <p className="mb-4">
              这一发现也为我们研究人类文明起源提供了新的视角，让我们对中国乃至世界文明的发展历程有了更深刻的认识。
            </p>
          </div>
        </div>
      </article>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h3 className="font-serif font-bold text-lg text-gray-800 mb-4 flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-[#C8102E]" />
          <span>评论 ({articleComments.length})</span>
        </h3>
        
        <form onSubmit={handleSubmitComment} className="mb-6">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="写下你的评论..."
            className="w-full h-24 p-4 border border-gray-200 rounded-lg resize-none focus:border-[#C8102E] focus:outline-none"
          />
          <button type="submit" className="btn-primary mt-3">发表评论</button>
        </form>
        
        <div className="space-y-4">
          {articleComments.map((comment) => (
            <div key={comment.id} className="pb-4 border-b border-gray-100 last:border-0">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src={comment.userAvatar}
                  alt={comment.userName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <span className="font-medium text-gray-800">{comment.userName}</span>
                  <span className="text-xs text-gray-400 ml-3">{comment.createdAt}</span>
                </div>
              </div>
              <p className="text-gray-600 pl-13">{comment.content}</p>
              <div className="flex items-center space-x-4 mt-2 pl-13">
                <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition-colors text-xs">
                  <Heart className="w-4 h-4" />
                  <span>点赞</span>
                </button>
                <button className="text-gray-400 hover:text-blue-500 transition-colors text-xs">
                  回复
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
