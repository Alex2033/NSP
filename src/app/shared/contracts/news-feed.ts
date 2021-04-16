export interface NewsFeed {
  title: string;
  articles: {
    id: number;
    slug: string;
    publishedAt: number;
    title: string;
  }[];
}
