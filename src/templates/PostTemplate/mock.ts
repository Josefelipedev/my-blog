import { data } from '../../api/dados.json';
import { PostTemplateProps } from './index';

export default {
  settings: data.setting,
  post: data.posts[0],
} as PostTemplateProps;
