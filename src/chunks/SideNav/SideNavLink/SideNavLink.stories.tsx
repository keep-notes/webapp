import { StoryObj } from '@storybook/react';
import SideNavLink from './SideNavLink';
import pages from '@/chunks/SideNav/pages';

export const Default: StoryObj<typeof SideNavLink> = {
  render: (args) => (
    <SideNavLink page={pages[0]} isSelected={args.isSelected} />
  ),
};

export default {
  component: SideNavLink,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isSelected: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};
