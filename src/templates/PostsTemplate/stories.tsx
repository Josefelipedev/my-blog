import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';
import { PostsTemplate, PostsTemplateProps } from './index';

export default {
  title: 'PostsTemplate',
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostsTemplateProps>;

export const Template: Story<PostsTemplateProps> = (args) => {
  return (
    <div>
      <PostsTemplate {...args} />
    </div>
  );
};
