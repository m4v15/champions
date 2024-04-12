import Link from 'next/link';

import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import { Logo } from './Logo';

const NavBar = () => (
  <>
    <div className="fixed top-0 mx-auto w-full bg-gray-cust px-3 py-6">
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
        <li>
          <Link href="/press">Press</Link>
        </li>
      </NavbarTwoColumns>
    </div>
    <div className="h-20"></div>
  </>
);

export { NavBar };
