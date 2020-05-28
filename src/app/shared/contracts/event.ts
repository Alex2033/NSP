export interface Event {
  id: number;
  mainArticleId?: number;
  mainArticleSlug?: string;
  name: string;
  type: string;
  startedAt: number;
  finishedAt: number;
  address: string;
  phone: string;
  email: string;
  site: string;
  vkontakteLink: string;
  facebookLink: string;
  telegramLink: string;
  twitterLink: string;
  backgroundImageXl?: string;
  backgroundImageLg?: string;
  backgroundImageMd?: string;
  backgroundImageSm?: string;
  backgroundImageAlt?: string;
  backgroundImageTitle?: string;
}
