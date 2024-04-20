import { StoryObj } from '@storybook/react';
import StyledLink from './index';

export const Primary: StoryObj<typeof StyledLink> = {
  args: {
    href: '#',
    children: 'Click me',
  },
};

export default {
  component: StyledLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
