import { StoryObj } from '@storybook/react';
import SideNavLink from './SideNavLink';
import pages from '@/chunks/SideNav/pages';

export const Primary: StoryObj<typeof SideNavLink> = {
  args: {
    page: pages[0],
  },
};

export default {
  component: SideNavLink,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
