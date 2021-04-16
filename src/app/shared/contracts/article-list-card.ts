export interface ArticleListCard {
  title: string;
  highlight: boolean;
  articles: {
    id: number;
    slug: string;
    publishedAt: number;
    title: string;
  }[];
}
