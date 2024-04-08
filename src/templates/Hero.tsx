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
              Connect with and support families trying to flee war
            </span>
          </>
        }
        description="We are collection of volunteers who are connecting people from Gaza trying to survive the war with allies around the world to champion and uplift their fundraising efforts"
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
    </Section>
  </div>
);

export { Hero };
