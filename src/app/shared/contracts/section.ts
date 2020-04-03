import {MenuElement} from './menu-element';
import {NewsFeed} from './news-feed';

export interface Section {
  id: number;
  title: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  cardsFilter: any;
  tags?: {
    name: string,
    code: string
  }[];
  cardsCount: number;
  cards: any[];
}
