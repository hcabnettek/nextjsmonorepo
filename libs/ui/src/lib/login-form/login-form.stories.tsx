import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from './login-form';

const Story: ComponentMeta<typeof LoginForm> = {
  component: LoginForm,
  title: 'LoginForm',
};
export default Story;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm />;

export const Primary = Template.bind({});
Primary.args = {};
