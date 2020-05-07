export interface Person {
  id: number;
  slug: string;
  firstName: string;
  middleName: string;
  lastName: string;
  photoXl: string;
  photoLg: string;
  photoMd: string;
  photoSm: string;
  position: string;
  companyName: string;
  companyNamePrefix?: string;
  name?: string;
  description?: string;
  phone?: string;
  email?: string;
  photoTitle?: string | null;
  photoAlt?: string | null;
}
