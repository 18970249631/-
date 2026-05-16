export interface Banner {
  id: string;
  title: string;
  image: string;
  link: string;
  summary?: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  image: string;
  source: string;
  publishTime: string;
  category: string;
  author?: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  articleCount?: number;
}

export interface Dynasty {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  description: string;
  featuredEmperors: string[];
  keyEvents: string[];
  flagImage?: string;
}

export interface Person {
  id: string;
  name: string;
  dynasty: string;
  role: string;
  avatar: string;
  achievements: string[];
  biography: string;
}

export interface Heritage {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
  images: string[];
}

export interface Paper {
  id: string;
  title: string;
  author: string;
  journal: string;
  publishDate: string;
  abstract: string;
  keywords: string[];
}

export interface Comment {
  id: string;
  articleId: string;
  userId: string;
  content: string;
  createdAt: string;
  userName: string;
  userAvatar?: string;
}

export interface HomeResponse {
  banners: Banner[];
  headlines: Article[];
  latestNews: Article[];
  featuredTopics: Topic[];
}
