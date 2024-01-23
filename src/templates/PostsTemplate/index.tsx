import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../Base';
import { PostStrapi } from '../../shared-typed/post-strapi';
import { PostGrid } from '../../components/PostGrid';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ posts = [], settings }: PostsTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};
