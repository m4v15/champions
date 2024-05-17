import type { ReactNode } from 'react';

import { CenteredFooter } from '@/footer/CenteredFooter';
import { Meta } from '@/layout/Meta';
import { NavBar } from '@/templates/NavBar';
import { AppConfig } from '@/utils/AppConfig';

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="flex h-screen flex-col">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <NavBar />
      <main className="grow">{props.children}</main>
      <CenteredFooter />
    </div>
  );
}
