import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputBox } from './input-box';

const Story: ComponentMeta<typeof InputBox> = {
  component: InputBox,
  title: 'Forms/InputBox',
};
export default Story;

const Template: ComponentStory<typeof InputBox> = (args) => (
  <InputBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
