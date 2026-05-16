import { Banner, Article, Topic, Dynasty, Person, Heritage, Paper, Comment } from '../types';

export const mockBanners: Banner[] = [
  {
    id: '1',
    title: '探秘三星堆：揭开古蜀文明的神秘面纱',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20sanxingdui%20bronze%20mask%20museum%20exhibition%20chinese%20archaeology&image_size=landscape_16_9',
    link: '/article/1',
    summary: '三星堆考古新发现，改写中国文明起源认知'
  },
  {
    id: '2',
    title: '丝绸之路：连接东西方的千年纽带',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20silk%20road%20caravan%20camels%20desert%20chinese%20history&image_size=landscape_16_9',
    link: '/article/2',
    summary: '从长安到罗马，探寻丝绸之路的辉煌历史'
  },
  {
    id: '3',
    title: '故宫六百年：见证明清两代的皇家兴衰',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beijing%20forbidden%20city%20palace%20chinese%20imperial%20architecture%20golden%20roof&image_size=landscape_16_9',
    link: '/article/3',
    summary: '故宫博物院建院百年，揭秘皇家生活'
  }
];

export const mockHeadlines: Article[] = [
  {
    id: '1',
    title: '良渚古城遗址申遗成功五周年：实证中华五千年文明',
    summary: '2019年7月6日，良渚古城遗址成功列入世界遗产名录，实证了中华五千年文明史。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liangzhu%20ancient%20city%20ruins%20archaeology%20chinese%20civilization&image_size=landscape_4_3',
    source: '新华网',
    publishTime: '2024-07-06 10:30',
    category: '考古发现'
  },
  {
    id: '2',
    title: '秦始皇陵兵马俑新发现：彩绘陶俑再现秦代艺术',
    summary: '考古工作者在秦始皇陵兵马俑一号坑发现了保存完整的彩绘陶俑，色彩依然鲜艳。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=terracotta%20army%20qin%20dynasty%20ancient%20chinese%20warriors%20museum&image_size=landscape_4_3',
    source: '人民网',
    publishTime: '2024-07-05 14:20',
    category: '文物考古'
  },
  {
    id: '3',
    title: '《永乐大典》残卷现身：揭秘明代最大类书的传奇',
    summary: '一册罕见的《永乐大典》残卷在私人收藏中被发现，填补了文献空白。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20chinese%20manuscript%20yongle%20dadian%20book%20calligraphy&image_size=landscape_4_3',
    source: '光明日报',
    publishTime: '2024-07-04 09:15',
    category: '历史文献'
  }
];

export const mockLatestNews: Article[] = [
  {
    id: '4',
    title: '甲骨文发现125周年：解码商代文字密码',
    summary: '2024年是甲骨文发现125周年，学者们仍在不断破解这些古老文字的奥秘。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=oracle%20bone%20script%20ancient%20chinese%20writing%20turtle%20shell&image_size=landscape_4_3',
    source: '中国文物报',
    publishTime: '2024-07-03 16:45',
    category: '文字研究'
  },
  {
    id: '5',
    title: '敦煌莫高窟数字化保护：让千年壁画永存',
    summary: '敦煌研究院利用数字技术对莫高窟进行全面记录，为后代保存珍贵文化遗产。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dunhuang%20mogao%20caves%20buddhist%20art%20mural%20painting&image_size=landscape_4_3',
    source: '中国文化报',
    publishTime: '2024-07-02 11:00',
    category: '文化遗产'
  },
  {
    id: '6',
    title: '郑和下西洋620周年：重温海上丝绸之路壮举',
    summary: '1405年郑和率领庞大船队开启七下西洋的壮举，展示了明代中国的航海实力。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20chinese%20treasure%20ship%20zheng%20he%20voyage%20ocean&image_size=landscape_4_3',
    source: '环球时报',
    publishTime: '2024-07-01 08:30',
    category: '对外交流'
  },
  {
    id: '7',
    title: '马王堆汉墓帛书研究新进展：失传古籍重见天日',
    summary: '考古学家对马王堆汉墓出土的帛书进行深入研究，发现了失传已久的古代文献。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20chinese%20silk%20manuscript%20mawangdui%20tomb%20discovery&image_size=landscape_4_3',
    source: '学术前沿',
    publishTime: '2024-06-30 15:20',
    category: '学术研究'
  }
];

export const mockTopics: Topic[] = [
  {
    id: '1',
    name: '中华文明探源',
    description: '探索中华文明的起源与发展脉络',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20civilization%20origin%20ancient%20village%20archaeology&image_size=landscape_4_3',
    articleCount: 128
  },
  {
    id: '2',
    name: '帝王将相',
    description: '解读历史上著名帝王与名臣的传奇人生',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20emperor%20ancient%20palace%20golden%20throne&image_size=landscape_4_3',
    articleCount: 256
  },
  {
    id: '3',
    name: '文化遗产',
    description: '世界文化遗产中的中国瑰宝',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20world%20heritage%20site%20great%20wall%20mountain&image_size=landscape_4_3',
    articleCount: 89
  },
  {
    id: '4',
    name: '四大发明',
    description: '中国古代四大发明及其世界影响',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20chinese%20inventions%20paper%20printing%20gunpowder%20compass&image_size=landscape_4_3',
    articleCount: 64
  }
];

export const mockDynasties: Dynasty[] = [
  {
    id: '1',
    name: '夏朝',
    startYear: -2070,
    endYear: -1600,
    description: '中国历史上第一个世袭制朝代，开启了中华文明的新纪元。',
    featuredEmperors: ['禹', '启', '桀'],
    keyEvents: ['禹建立夏朝', '太康失国', '少康中兴', '商汤灭夏']
  },
  {
    id: '2',
    name: '商朝',
    startYear: -1600,
    endYear: -1046,
    description: '青铜文明高度发达，甲骨文的发现证实了商朝的存在。',
    featuredEmperors: ['商汤', '盘庚', '武丁', '纣王'],
    keyEvents: ['商汤灭夏', '盘庚迁殷', '武丁中兴', '牧野之战']
  },
  {
    id: '3',
    name: '周朝',
    startYear: -1046,
    endYear: -256,
    description: '分为西周和东周，是中国历史上最长的朝代，礼乐制度完备。',
    featuredEmperors: ['周武王', '周成王', '周平王'],
    keyEvents: ['武王伐纣', '分封制', '春秋五霸', '战国七雄']
  },
  {
    id: '4',
    name: '秦朝',
    startYear: -221,
    endYear: -206,
    description: '秦始皇统一六国，建立中国历史上第一个大一统帝国。',
    featuredEmperors: ['秦始皇', '秦二世'],
    keyEvents: ['统一六国', '统一文字度量衡', '修建长城', '陈胜吴广起义']
  },
  {
    id: '5',
    name: '汉朝',
    startYear: -202,
    endYear: 220,
    description: '分为西汉和东汉，国力强盛，丝绸之路开通。',
    featuredEmperors: ['汉高祖', '汉武帝', '光武帝'],
    keyEvents: ['楚汉相争', '独尊儒术', '张骞出使西域', '黄巾起义']
  },
  {
    id: '6',
    name: '唐朝',
    startYear: 618,
    endYear: 907,
    description: '中国历史上的鼎盛时期，文化繁荣，对外开放。',
    featuredEmperors: ['唐太宗', '武则天', '唐玄宗'],
    keyEvents: ['贞观之治', '开元盛世', '安史之乱', '黄巢起义']
  },
  {
    id: '7',
    name: '宋朝',
    startYear: 960,
    endYear: 1279,
    description: '分为北宋和南宋，经济文化高度发达，科技进步显著。',
    featuredEmperors: ['宋太祖', '宋仁宗', '宋高宗'],
    keyEvents: ['陈桥兵变', '靖康之变', '岳飞抗金', '文天祥抗元']
  },
  {
    id: '8',
    name: '明朝',
    startYear: 1368,
    endYear: 1644,
    description: '推翻元朝统治，郑和下西洋，修建紫禁城。',
    featuredEmperors: ['明太祖', '明成祖', '万历皇帝'],
    keyEvents: ['朱元璋称帝', '靖难之役', '郑和下西洋', '李自成起义']
  },
  {
    id: '9',
    name: '清朝',
    startYear: 1644,
    endYear: 1912,
    description: '中国最后一个封建王朝，经历康乾盛世到近代衰落。',
    featuredEmperors: ['康熙', '雍正', '乾隆'],
    keyEvents: ['入关定都', '康乾盛世', '鸦片战争', '辛亥革命']
  }
];

export const mockPersons: Person[] = [
  {
    id: '1',
    name: '秦始皇',
    dynasty: '秦朝',
    role: '皇帝',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20chinese%20emperor%20qin%20shihuang%20portrait%20painting&image_size=portrait_4_3',
    achievements: ['统一六国', '统一文字度量衡', '修建长城', '建立郡县制'],
    biography: '秦始皇嬴政（前259年—前210年），是中国历史上第一个统一王朝秦朝的建立者。他13岁即位，39岁统一六国，建立了中国历史上第一个中央集权制国家。'
  },
  {
    id: '2',
    name: '汉武帝',
    dynasty: '汉朝',
    role: '皇帝',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=han%20wudi%20emperor%20ancient%20chinese%20portrait%20painting&image_size=portrait_4_3',
    achievements: ['罢黜百家独尊儒术', '开辟丝绸之路', '北击匈奴', '设立太学'],
    biography: '汉武帝刘彻（前156年—前87年），是汉朝第七位皇帝。他在位期间，汉朝达到鼎盛，政治、经济、文化都得到极大发展。'
  },
  {
    id: '3',
    name: '唐太宗',
    dynasty: '唐朝',
    role: '皇帝',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tang%20taizong%20emperor%20ancient%20chinese%20portrait%20painting&image_size=portrait_4_3',
    achievements: ['贞观之治', '完善科举制', '对外扩张', '文成公主入藏'],
    biography: '唐太宗李世民（598年—649年），是唐朝第二位皇帝。他开创了贞观之治，使唐朝成为当时世界上最强大的国家之一。'
  },
  {
    id: '4',
    name: '岳飞',
    dynasty: '宋朝',
    role: '抗金名将',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yue%20fei%20chinese%20general%20ancient%20warrior%20portrait&image_size=portrait_4_3',
    achievements: ['收复建康', '郾城大捷', '岳家军抗金', '精忠报国'],
    biography: '岳飞（1103年—1142年），南宋著名抗金将领。他率领岳家军多次击败金军，收复失地，后被奸臣秦桧以"莫须有"的罪名杀害。'
  },
  {
    id: '5',
    name: '郑和',
    dynasty: '明朝',
    role: '航海家',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zheng%20he%20chinese%20explorer%20admiral%20portrait%20painting&image_size=portrait_4_3',
    achievements: ['七下西洋', '开辟海上丝绸之路', '促进中外交流', '绘制航海图'],
    biography: '郑和（1371年—1433年），明朝著名航海家、外交家。他率领庞大船队七次出使西洋，最远到达非洲东海岸。'
  }
];

export const mockHeritages: Heritage[] = [
  {
    id: '1',
    name: '长城',
    type: '文化遗产',
    location: '中国北部',
    description: '长城是中国古代的军事防御工程，始建于春秋战国时期，是世界上最长的军事防御工事。',
    images: ['https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=great%20wall%20of%20china%20mountain%20sunset&image_size=landscape_16_9']
  },
  {
    id: '2',
    name: '故宫',
    type: '文化遗产',
    location: '北京',
    description: '故宫是明清两代的皇家宫殿，是世界上现存规模最大、保存最为完整的木质结构古建筑群。',
    images: ['https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beijing%20forbidden%20city%20palace%20courtyard&image_size=landscape_16_9']
  },
  {
    id: '3',
    name: '兵马俑',
    type: '文化遗产',
    location: '陕西西安',
    description: '秦始皇兵马俑是世界上规模最大的古代军事博物馆，被誉为"世界第八大奇迹"。',
    images: ['https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=terracotta%20army%20museum%20excavation%20site&image_size=landscape_16_9']
  },
  {
    id: '4',
    name: '莫高窟',
    type: '文化遗产',
    location: '甘肃敦煌',
    description: '莫高窟是世界上现存规模最大、内容最丰富的佛教艺术圣地，拥有大量精美的壁画和雕塑。',
    images: ['https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dunhuang%20mogao%20caves%20buddhist%20art%20interior&image_size=landscape_16_9']
  }
];

export const mockPapers: Paper[] = [
  {
    id: '1',
    title: '良渚古城水利系统的考古发现与研究',
    author: '张教授',
    journal: '考古学报',
    publishDate: '2024-06-15',
    abstract: '本文通过对良渚古城水利系统的考古发掘和研究，揭示了中国新石器时代先进的水利工程技术，为研究中华文明起源提供了重要证据。',
    keywords: ['良渚', '水利系统', '新石器时代', '文明起源']
  },
  {
    id: '2',
    title: '甲骨文所见商代社会结构研究',
    author: '李教授',
    journal: '历史研究',
    publishDate: '2024-05-20',
    abstract: '基于最新公布的甲骨文资料，本文探讨了商代的社会结构、政治制度和经济生活，为理解商代社会提供了新的视角。',
    keywords: ['甲骨文', '商代', '社会结构', '古文字']
  },
  {
    id: '3',
    title: '丝绸之路出土文书与唐代西域治理',
    author: '王研究员',
    journal: '中国史研究',
    publishDate: '2024-04-25',
    abstract: '通过对丝绸之路出土文书的整理和研究，本文分析了唐代对西域地区的治理模式和管理体系。',
    keywords: ['丝绸之路', '唐代', '西域', '文书']
  }
];

export const mockComments: Comment[] = [
  {
    id: '1',
    articleId: '1',
    userId: '1',
    content: '这篇文章非常有深度，让我对良渚文明有了更全面的了解！',
    createdAt: '2024-07-06 12:30',
    userName: '历史爱好者',
    userAvatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20male%20avatar%20portrait%20simple&image_size=square'
  },
  {
    id: '2',
    articleId: '1',
    userId: '2',
    content: '中华文明源远流长，良渚遗址的发现证明了我们五千年文明史的真实性。',
    createdAt: '2024-07-06 13:45',
    userName: '文化传承者',
    userAvatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20female%20avatar%20portrait%20simple&image_size=square'
  },
  {
    id: '3',
    articleId: '1',
    userId: '3',
    content: '希望能有更多这样的考古发现，让我们更好地了解自己的历史。',
    createdAt: '2024-07-06 15:20',
    userName: '考古迷',
    userAvatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20scholar%20avatar%20portrait%20simple&image_size=square'
  }
];
