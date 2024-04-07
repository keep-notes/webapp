import { StoryObj } from '@storybook/react';
import StyledLink from './StyledLink';

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
