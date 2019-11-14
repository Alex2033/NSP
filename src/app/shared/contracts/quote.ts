export interface Quote {
  quote: string;
  published_at: number;
  source: {
    name: string;
    url?: string;
  };
  author: {
    avatar: string;
    firstName: string;
    lastName: string;
    position: string;
  };
}
