import { data } from '../../api/dados.json';
import { PostsTemplateProps } from './index';

export default {
  settings: data.setting,
  posts: data.posts,
} as PostsTemplateProps;
