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
          <Link href="/volunteer">
            <Button>Volunteer With Us</Button>
          </Link>
        }
      />

      <br />
      <Link href="/funds">
        <Button>See the funds we&apos;re supporting</Button>
      </Link>
    </Section>
  </div>
);

export { Hero };
