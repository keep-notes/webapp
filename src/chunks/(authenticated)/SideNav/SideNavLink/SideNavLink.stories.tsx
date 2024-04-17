import { StoryObj } from '@storybook/react';
import SideNavLink from './SideNavLink';
import pages from '@/chunks/(authenticated)/SideNav/pages';

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
