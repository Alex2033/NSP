import {Tag} from './tag';

export interface Section {
  id: number;
  title: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  cardsFilter: any;
  tags?: Tag[];
  cardsCount: number;
  cards: any[];
}
