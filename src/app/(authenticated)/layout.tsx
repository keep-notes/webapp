import { PropsWithChildren } from 'react';
import Header from '@/chunks/(authenticated)/Header';
import SideNav from '@/chunks/(authenticated)/SideNav';

export default function AuthenticatedLayout(props: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col gap-4">
      <Header />
      <div className="relative flex flex-1 pl-20 pr-2 md:pl-32">
        <SideNav />
        <div className="flex-1">{props.children}</div>
      </div>
    </div>
  );
}
