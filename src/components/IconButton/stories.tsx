import { MdSearch } from 'react-icons/md';

import IconButton from './index';

export const Primary = {
  args: {
    title: 'Search',
    children: <MdSearch size={48} />,
  },
};

export default {
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
