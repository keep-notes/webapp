import SideNav from './SideNav';

export const Primary = {
  render: () => <SideNav />,
};

export default {
  component: SideNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
