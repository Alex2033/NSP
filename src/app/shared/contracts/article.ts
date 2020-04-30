import {Tag} from './tag';
import {ArticleCard} from './article-card';
import {Event} from './event';

export interface Article {
  id: number;
  slug: string;
  title: string;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  authors: {
    id: number;
    name: string;
    slug: string;
  }[];
  publishedAt: number;
  viewsCount: number;
  previewText: string;
  commentsAllowed: boolean;
  commentsCount: number;
  content: any;
  asideCards: any[];
  tags: Tag[];
  relatedArticleCards: ArticleCard[];
  event: Event;
}
