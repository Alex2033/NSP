export interface Quote {
  text: string;
  publishedAt: number;
  source?: {
    name: string;
    url?: string;
  };
  author?: {
    id?: number;
    slug?: string;
    photoXl: string;
    photoLg: string;
    photoMd: string;
    photoSm: string;
    photoTitle?: string | null;
    photoAlt?: string | null;
    firstName: string;
    lastName: string;
    position: string;
  };
}
