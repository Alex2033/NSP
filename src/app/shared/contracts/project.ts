import {MenuElement} from './menu-element';
import {NewsFeed} from './news-feed';

export interface Project {
  title: string;
  slug: string;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  menu: MenuElement[];
  layout: {
    xl: any[],
    lg: any[],
    md: any[],
    sm: any[],
  };
  newsBlocks: NewsFeed[]
}
