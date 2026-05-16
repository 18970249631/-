import { useState } from 'react';
import { Landmark, Palette, Music, Utensils } from 'lucide-react';
import { mockHeritages } from '../data/mockData';

const categories = [
  { id: 'heritage', name: '文化遗产', icon: Landmark },
  { id: 'art', name: '传统艺术', icon: Palette },
  { id: 'music', name: '传统音乐', icon: Music },
  { id: 'food', name: '饮食文化', icon: Utensils },
];

export default function CultureChannel() {
  const [activeCategory, setActiveCategory] = useState('heritage');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-800 mb-2">文化频道</h1>
        <p className="text-gray-500">探索中华五千年灿烂文化，感受传统艺术的独特魅力</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-[#C8102E] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>

      {activeCategory === 'heritage' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockHeritages.map((heritage) => (
            <div key={heritage.id} className="card overflow-hidden">
              <div className="relative h-56">
                <img
                  src={heritage.images[0]}
                  alt={heritage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#C8102E] text-white text-xs px-3 py-1 rounded-full">
                  {heritage.type}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">{heritage.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{heritage.location}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{heritage.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeCategory === 'art' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: '书法艺术', desc: '汉字书写的艺术形式，体现线条之美', img: 'chinese%20calligraphy%20art%20brush%20ink' },
            { name: '国画', desc: '传统中国画，以笔墨抒发意境', img: 'traditional%20chinese%20painting%20ink%20landscape' },
            { name: '陶瓷艺术', desc: '瓷器制作工艺，精美绝伦', img: 'chinese%20porcelain%20ceramic%20art%20beautiful' },
            { name: '剪纸艺术', desc: '民间传统手工艺，寓意吉祥', img: 'chinese%20paper%20cutting%20art%20traditional' },
            { name: '刺绣', desc: '针线交织的艺术，细腻精美', img: 'chinese%20embroidery%20art%20silk%20fabric' },
            { name: '木雕', desc: '木头雕刻艺术，栩栩如生', img: 'chinese%20wood%20carving%20art%20traditional' },
          ].map((item, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="h-44 overflow-hidden">
                <img
                  src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${item.img}&image_size=landscape_4_3`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeCategory === 'music' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: '古琴', desc: '中国最古老的弹拨乐器之一', img: 'chinese%20guqin%20ancient%20musical%20instrument' },
            { name: '古筝', desc: '弦乐器，音色优美动听', img: 'chinese%20guzheng%20zither%20musical%20instrument' },
            { name: '二胡', desc: '弓弦乐器，表现力丰富', img: 'chinese%20erhu%20fiddle%20musical%20instrument' },
            { name: '琵琶', desc: '弹拨乐器，音色清脆', img: 'chinese%20pipa%20lute%20musical%20instrument' },
            { name: '笛子', desc: '管乐器，悠扬婉转', img: 'chinese%20dizi%20flute%20musical%20instrument' },
            { name: '唢呐', desc: '管乐器，音色高亢', img: 'chinese%20suona%20horn%20musical%20instrument' },
          ].map((item, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="h-44 overflow-hidden">
                <img
                  src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${item.img}&image_size=landscape_4_3`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeCategory === 'food' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: '川菜', desc: '麻辣鲜香，百菜百味', region: '四川' },
            { name: '粤菜', desc: '清淡鲜美，注重原味', region: '广东' },
            { name: '鲁菜', desc: '宫廷菜的代表，技艺精湛', region: '山东' },
            { name: '苏菜', desc: '清新淡雅，刀工精细', region: '江苏' },
            { name: '浙菜', desc: '鲜嫩软滑，清爽不腻', region: '浙江' },
            { name: '闽菜', desc: '海鲜为主，酸甜适口', region: '福建' },
          ].map((item, index) => (
            <div key={index} className="card p-5">
              <div className="h-32 rounded-lg overflow-hidden mb-4">
                <img
                  src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(item.name + ' chinese cuisine food')}&image_size=landscape_4_3`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-gray-800">{item.name}</h3>
                <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">{item.region}</span>
              </div>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
