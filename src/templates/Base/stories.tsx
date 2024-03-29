import { Meta, Story } from '@storybook/react/types-6-0';
import { BaseTemplate, BaseTemplateProps } from './index';

import mock from './mock';

export default {
  title: 'BaseTemplate',
  component: BaseTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<BaseTemplateProps>;

export const Template: Story<BaseTemplateProps> = (args) => {
  return (
    <div>
      <BaseTemplate {...args} />
    </div>
  );
};
