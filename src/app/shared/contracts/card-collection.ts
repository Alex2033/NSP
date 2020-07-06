export interface CardCollection {
  slug?: string;
  title: string;
  cards: any[];
  headerUrl?: string;
  links: {title: string, link: string}[];
}
