import Link from 'next/link';

import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import { Logo } from './Logo';

const NavBar = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/sign-up">Sign Up</Link>
      </li>
    </NavbarTwoColumns>
  </Section>
);

export { NavBar };
