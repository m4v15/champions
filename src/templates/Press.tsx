import Link from 'next/link';

import { Button } from '@/button/Button';
import { Section } from '@/layout/Section';
import { ExternalLink } from '@/links/ExternalLink';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { NavBar } from './NavBar';

const Press = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavBar></NavBar>
    <Section yPadding="pb-32">
      <div className="mt-5 flex flex-col items-center text-gray-950">
        <div className="w-full text-left">
          <div className="font-bold">
            Gaza Fundraising Coverage in the Media
          </div>
          <br />
          <ExternalLink
            url="https://hyperallergic.com/879012/raising-funds-to-help-samah-ramadan-family-of-10-exit-gaza/"
            text="HYPERALLERGIC - Raising Funds to Help a Family of 10 Exit Gaza"
          />
          <br />
          <br />
          <ExternalLink
            url="https://theintercept.com/2024/03/07/gaza-palestinians-border-crossing-egypt/"
            text="The Intercept - Desperate to escape Gaza carnage, Palestinians are
            forced to pay exorbitant fees to enter Egypt"
          />
        </div>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdQBwxbU97VXa9Phi4ACSrQMfIJNp6ZFPfQvhAjJ2J1ekoMJg/viewform"
          rel="noopener noreferrer"
          target="_blank"
          className="pt-10"
        >
          <Button>Become A Champion</Button>
        </Link>
      </div>
    </Section>
  </div>
);

export { Press };
