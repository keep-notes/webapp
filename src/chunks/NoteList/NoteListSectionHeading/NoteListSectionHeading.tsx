import { PropsWithChildren } from 'react';

export default function NoteListSectionHeading(props: PropsWithChildren) {
  return (
    <h2 className="mb-4 mt-6 font-bold uppercase text-neutral-400">
      {props.children}
    </h2>
  );
}
