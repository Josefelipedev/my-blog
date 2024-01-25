import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';
import { PostTemplate, PostTemplateProps } from './index';

export default {
  title: 'PostTemplate',
  component: PostTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostTemplateProps>;

export const Template: Story<PostTemplateProps> = (args) => {
  return (
    <div>
      <PostTemplate {...args} />
    </div>
  );
};
