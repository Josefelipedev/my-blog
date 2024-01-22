import { StrapiImage } from './strapi-image';
import { MenuPropsLinks } from '../components/Menu';

export type SettingsStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  logo: StrapiImage;
  menuLink: MenuPropsLinks[];
  text: string;
};
