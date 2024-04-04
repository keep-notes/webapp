import { MdSearch } from 'react-icons/md';

import IconButton from './IconButton';

export const Default = {
  render: () => (
    <IconButton title="Search">
      <MdSearch size={48} />
    </IconButton>
  ),
};

export default {
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
