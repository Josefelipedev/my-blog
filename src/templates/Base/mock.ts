import { data } from '../../api/dados.json';
import { BaseTemplateProps } from './index';

export default {
  settings: data.setting,
  children: 'olá mundo',
} as BaseTemplateProps;
