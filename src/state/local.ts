import * as idb from 'idb-keyval';

interface LocalKeys {
  authToken: string;
}

type Key = keyof LocalKeys;
type Val<T extends Key> = LocalKeys[T] | undefined;

async function getLocalItem(key: Key): Promise<Val<typeof key>> {
  return idb.get(key);
}

async function setLocalItem(key: Key, val: Val<typeof key>) {
  return idb.set(key, val);
}

async function clearLocalItems() {
  return idb.clear();
}

export { clearLocalItems, getLocalItem, setLocalItem };
