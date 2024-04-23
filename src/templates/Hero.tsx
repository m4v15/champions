import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <div
    className="mx-auto max-w-screen-lg bg-cover"
    style={{
      backgroundImage: `url('/assets/images/background-image.webp')`,
      height: '800px',
      maxWidth: '1400px',
    }}
  >
    <Section yPadding="pt-10 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-gray-900">
              Connect with and champion Gazan families trying to flee genocide
            </span>
          </>
        }
        description="We are a collective of allies around the world who are connecting with families in Gaza as pen pals and champions for their fundraising campaigns to escape the violence in Gaza.  
"
        button={
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdQBwxbU97VXa9Phi4ACSrQMfIJNp6ZFPfQvhAjJ2J1ekoMJg/viewform"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button>Become A Champion</Button>
          </Link>
        }
      />
      <Link
        href="https://docs.google.com/forms/d/15cm3Ujy3H7PMGfceLG3fpCi8jRd4Cip1wzjPgbGLKSU/viewform?ts=66269362&edit_requested=true"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button>Volunteer to set up a GoFundMe</Button>
      </Link>
      <br />
      <Link href="/funds">
        <Button>See the funds we&apos;re supporting</Button>
      </Link>
    </Section>
  </div>
);

export { Hero };
