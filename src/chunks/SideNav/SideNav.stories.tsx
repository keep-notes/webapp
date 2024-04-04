import SideNav from './SideNav';

export const Default = {
  render: () => <SideNav />,
};

export default {
  component: SideNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
