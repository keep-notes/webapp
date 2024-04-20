import * as idb from 'idb-keyval';

interface LocalKeys {
  authToken: string;
  draft: {
    title: string;
    content: string;
  };
}

type Key = keyof LocalKeys;
type Val<T extends Key> = Partial<LocalKeys>[T];

async function getLocalItem<T extends Key>(key: T): Promise<Val<T>> {
  return idb.get(key);
}

async function setLocalItem<T extends Key>(key: T, val: Val<T>) {
  return idb.set(key, val);
}

async function clearLocalItems() {
  return idb.clear();
}

export { clearLocalItems, getLocalItem, setLocalItem };
