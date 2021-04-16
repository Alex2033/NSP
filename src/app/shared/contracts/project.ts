import {MenuElement} from './menu-element';
import {NewsFeed} from './news-feed';

export interface Project {
  id?: number;
  title: string;
  slug: string;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  layout: {
    xl: any[];
    lg: any[];
    md: any[];
    sm: any[];
  };
  newsBlocks: NewsFeed[];
  collections: any[];
}
