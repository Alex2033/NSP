export interface ArticleListCard {
  title: string;
  url: string;
  highlight: boolean;
  articles: {
    id: number;
    slug: string;
    publishedAt: number;
    title: string;
  }[];
}
