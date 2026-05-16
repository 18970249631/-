import { useState } from 'react';
import { MessageCircle, Heart, Share2, Send, User, Clock, TrendingUp, Lightbulb } from 'lucide-react';
import { mockComments } from '../data/mockData';

const discussions = [
  {
    id: '1',
    title: '大家认为秦朝灭亡的根本原因是什么？',
    author: '历史爱好者',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20male%20avatar%20portrait%20simple&image_size=square',
    time: '2小时前',
    replies: 45,
    views: 328,
    isHot: true,
  },
  {
    id: '2',
    title: '唐朝为什么能成为中国历史上最开放的朝代？',
    author: '文化探索者',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20female%20avatar%20portrait%20simple&image_size=square',
    time: '5小时前',
    replies: 28,
    views: 196,
    isHot: false,
  },
  {
    id: '3',
    title: '如何评价岳飞的历史地位？',
    author: '宋史研究者',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20scholar%20avatar%20portrait%20simple&image_size=square',
    time: '昨天',
    replies: 89,
    views: 567,
    isHot: true,
  },
  {
    id: '4',
    title: '丝绸之路对中国文化的影响有哪些？',
    author: '丝路爱好者',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20traveler%20avatar%20portrait%20simple&image_size=square',
    time: '昨天',
    replies: 36,
    views: 289,
    isHot: false,
  },
];

export default function CommunityPage() {
  const [newComment, setNewComment] = useState('');
  const [activeTab, setActiveTab] = useState<'discussions' | 'qa'>('discussions');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setNewComment('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-800 mb-2">互动社区</h1>
        <p className="text-gray-500">与历史爱好者交流讨论，分享你的见解和思考</p>
      </div>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('discussions')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            activeTab === 'discussions'
              ? 'bg-[#C8102E] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          <span>热门讨论</span>
        </button>
        <button
          onClick={() => setActiveTab('qa')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            activeTab === 'qa'
              ? 'bg-[#C8102E] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Lightbulb className="w-5 h-5" />
          <span>历史问答</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {activeTab === 'discussions' ? (
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="card p-5 cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <img
                        src={discussion.avatar}
                        alt={discussion.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-serif font-bold text-gray-800 hover:text-[#C8102E] transition-colors">
                          {discussion.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{discussion.author}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{discussion.time}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    {discussion.isHot && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">热</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-6 mt-4 pt-4 border-t border-gray-100">
                    <span className="flex items-center space-x-1 text-gray-400">
                      <MessageCircle className="w-4 h-4" />
                      <span>{discussion.replies}回复</span>
                    </span>
                    <span className="flex items-center space-x-1 text-gray-400">
                      <TrendingUp className="w-4 h-4" />
                      <span>{discussion.views}浏览</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {[
                { question: '为什么说夏朝是中国历史上第一个朝代？', answer: '夏朝（约前2070年—约前1600年）是中国史书记载的第一个世袭制朝代。一般认为夏朝是多个部落联盟或复杂酋邦形式的国家。', asker: '历史小白' },
                { question: '秦始皇统一六国后采取了哪些措施巩固统治？', answer: '秦始皇统一六国后，采取了统一文字、统一度量衡、统一货币、修建长城、推行郡县制等一系列措施来巩固中央集权统治。', asker: '学生提问' },
                { question: '唐朝的科举制度对中国历史有什么影响？', answer: '科举制度打破了门阀士族的垄断，为社会各阶层提供了平等的晋升机会，促进了社会流动，对中国古代官僚体系和文化发展产生了深远影响。', asker: '求知者' },
              ].map((item, index) => (
                <div key={index} className="card p-5">
                  <h3 className="font-serif font-bold text-gray-800 mb-3">{item.question}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.answer}</p>
                  <p className="text-xs text-gray-400">提问者：{item.asker}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h3 className="font-serif font-bold text-gray-800 mb-4">发表评论</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="分享你的历史见解..."
                className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:border-[#C8102E] focus:outline-none"
              />
              <button type="submit" className="btn-primary w-full mt-3 flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>发布</span>
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-serif font-bold text-gray-800 mb-4">精彩评论</h3>
            <div className="space-y-4">
              {mockComments.map((comment) => (
                <div key={comment.id} className="pb-4 border-b border-gray-100 last:border-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <img
                      src={comment.userAvatar}
                      alt={comment.userName}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700">{comment.userName}</span>
                    <span className="text-xs text-gray-400">{comment.createdAt}</span>
                  </div>
                  <p className="text-sm text-gray-600">{comment.content}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition-colors text-xs">
                      <Heart className="w-4 h-4" />
                      <span>点赞</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500 transition-colors text-xs">
                      <Share2 className="w-4 h-4" />
                      <span>分享</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
