import { NoteModalProps } from './NoteModal.types';
import Card from '@/components/Card/Card';
import useNoteModal from '@/fragments/NoteModal/useNoteModal';
import Button from '@/components/Button/Button';
import IconButton from '@/components/IconButton/IconButton';
import TextArea from '@/components/TextArea/TextArea';
import TextBox from '@/components/TextBox/TextBox';

export default function NoteModal(props: NoteModalProps) {
  const h = useNoteModal(props);
  if (!props.note) return;

  return (
    <div className="fixed left-0 top-0 z-20 grid h-screen w-screen place-items-center">
      <div
        className="absolute h-full w-full bg-[#00000088]"
        onClick={h.close}
      />
      <Card className="z-30 flex max-h-[80vh] w-full flex-col gap-4 bg-dark py-1 shadow-xl md:w-[40em]">
        <TextBox
          variant="ghost"
          placeholder="Title"
          className="mx-2 text-lg font-semibold"
          {...h.inputExtras('title')}
        />
        <div className="flex-1 overflow-y-auto p-2">
          <TextArea
            variant="ghost"
            placeholder="Note"
            {...h.inputExtras('content')}
          />
        </div>
        <footer className="flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            {h.actions.map((btn, index) => (
              <IconButton
                key={index}
                title={btn.title}
                onClick={btn.action}
                disabled={btn.disabled && btn.disabled()}
              >
                <btn.Icon size={20} />
              </IconButton>
            ))}
          </div>
          <Button onClick={h.close}>Close</Button>
        </footer>
      </Card>
    </div>
  );
}
