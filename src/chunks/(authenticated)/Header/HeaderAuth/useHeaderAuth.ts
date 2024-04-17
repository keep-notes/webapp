import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { clearLocalItems } from '@/data/local';
import { useAuthUser } from '@/data/auth';

export default function useHeaderAuth() {
  const router = useRouter();
  const client = useApolloClient();
  const authUser = useAuthUser();

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  const logOut = async () => {
    router.push('/login');
    await client.resetStore();
    await clearLocalItems();
  };

  return { authUser, logOut, menuVisible, toggleMenu };
}
