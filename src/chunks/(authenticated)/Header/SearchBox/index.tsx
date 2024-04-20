'use client';

import cn from 'classnames';
import { MdArrowBack, MdClose, MdSearch } from 'react-icons/md';
import { SearchBoxProps } from './types';
import useSearchBox from './hooks';
import IconButton from '@/components/IconButton';

export default function SearchBox(props: SearchBoxProps) {
  const h = useSearchBox();

  if (props.isCompact && !h.focused) {
    return (
      <IconButton title="Search" onClick={h.actions.focus}>
        <MdSearch size={24} />
      </IconButton>
    );
  }

  return (
    <div
      ref={h.refs.container}
      className={cn(
        'inline-flex items-center gap-2 rounded-lg bg-accent px-2',
        'focus-within:bg-white focus-within:text-black',
        { 'absolute left-4 top-4': h.focused && props.isCompact }
      )}
      onFocus={h.actions.focus}
      onBlur={h.events.onBlur}
      tabIndex={0}
    >
      <div>
        {props.isCompact ? (
          <IconButton
            title="Close search"
            className="p-2"
            onClick={h.actions.blur}
          >
            <MdArrowBack size={24} />
          </IconButton>
        ) : (
          <IconButton title="Search" className="p-2" onClick={h.actions.focus}>
            <MdSearch size={24} />
          </IconButton>
        )}
      </div>
      <input
        ref={h.refs.input}
        value={h.value ?? ''}
        onChange={h.events.onChangeValue}
        className="bg-transparent py-3 focus:outline-none"
        placeholder="Search"
        autoFocus
      />
      {h.focused && (
        <div>
          <IconButton
            title="Clear search"
            className="p-2"
            onClick={h.actions.clearValue}
          >
            <MdClose size={24} />
          </IconButton>
        </div>
      )}
    </div>
  );
}
