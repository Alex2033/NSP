export interface Company {
  id: number;
  name: string;
  slug: string;
  activityName: string;
  phone: string;
  site: string;
  logoXl: string;
  logoLg: string;
  logoMd: string;
  logoSm: string;
  logoTitle?: string | null;
  logoAlt?: string | null;
  address?: string;
  description?: string;
  organizationForm?: string;
  latitude?: number;
  longitude?: number;
  vkontakteLink?: string;
  facebookLink?: string;
  telegramLink?: string;
  twitterLink?: string;
  instagramLink?: string;
  youtubeLink: string;
  email?: string;

  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}
