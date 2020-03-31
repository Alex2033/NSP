import {ArticleCard} from './article-card';

export interface CardCollection {
  id: number;
  slug: string;
  title: string;
  cards: ArticleCard[];
  links: {title: string, link: string}[];
}
