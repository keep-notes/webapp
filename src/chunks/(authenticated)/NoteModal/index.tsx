import { MdOutlineArchive, MdOutlinePushPin, MdPushPin } from 'react-icons/md';
import useNoteModal from './hooks';
import Card from '@/components/Card';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import Index from '@/components/TextArea';
import TextBox from '@/components/TextBox';

export default function NoteModal() {
  const h = useNoteModal();

  if (!h.note) return;

  return (
    <div className="fixed left-0 top-0 z-20 grid h-screen w-screen place-items-center">
      <div
        className="absolute h-full w-full bg-[#00000088]"
        onClick={h.close}
      />
      <Card className="z-30 flex max-h-[80vh] w-full flex-col gap-4 bg-dark pb-1 pt-4 shadow-xl md:w-[40em]">
        <div className="flex">
          <TextBox
            variant="ghost"
            placeholder="Title"
            className="mx-2 text-lg font-semibold"
            {...h.inputExtras('title')}
          />
          {h.isPinned ? (
            <IconButton
              title="Unpin note"
              className="bg-light"
              onClick={h.unpin}
            >
              <MdPushPin size={20} />
            </IconButton>
          ) : (
            <IconButton title="Pin note" onClick={() => h.pin()}>
              <MdOutlinePushPin size={20} />
            </IconButton>
          )}
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          <Index
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
