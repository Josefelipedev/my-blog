import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../Base';
import { PostStrapi } from '../../shared-typed/post-strapi';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { TagsContainer } from './styles';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post?: PostStrapi;
};

export const PostTemplate = ({ post, settings }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
      <TagsContainer>
        <PostTags tags={post?.tags} />
      </TagsContainer>
    </BaseTemplate>
  );
};
