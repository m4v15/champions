import Link from 'next/link';

import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

import { Button } from '../button/Button';
import { NavBar } from './NavBar';

const SignUp = () => (
  // <div className="text-gray-600 antialiased">
  //   <Meta title={AppConfig.title} description={AppConfig.description} />
  //   <NavBar></NavBar>
  //   <iframe
  //     src="https://docs.google.com/forms/d/e/1FAIpQLSdQBwxbU97VXa9Phi4ACSrQMfIJNp6ZFPfQvhAjJ2J1ekoMJg/viewform?embedded=true"
  //     width="100%"
  //     height="900vh"
  //   >
  //     Loading…
  //   </iframe>
  // </div>
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavBar></NavBar>
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
        <div className="sm:order-1">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
            Be a Champion
          </h2>

          <div className="mt-6 flex-col items-center sm:mt-10">
            <p className="ms-1 font-semibold text-gray-800 sm:mb-1 sm:ms-2">
              Championing a fund means you take on an existing GoFundMe for a
              Gazan family and do your best to fundraise using online and
              offline methods.
            </p>
            <br />
            <p className="ms-1 text-gray-800 sm:mb-1 sm:ms-2">
              This could include posting on your social media, hosting a
              fundraiser dinner, raffling art or other goods, or other creative
              ideas. We have a collection of crowdsourced ideas, so you
              wouldn&apos;t be starting from scratch when it comes to planning!
              <br />
              <br />
              It is a big commitment, and can be a bit daunting, but it is also
              extremely rewarding and meaningful - and you won&apos;t be alone!
              You would be supported by a community of champions around the
              world who are sharing ideas, information, and support.
            </p>
          </div>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdQBwxbU97VXa9Phi4ACSrQMfIJNp6ZFPfQvhAjJ2J1ekoMJg/viewform"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button>Become A Champion</Button>
          </Link>
        </div>
        <div className="sm:order-2">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
            Connect your account
          </h2>

          <div className="mt-6 flex-col items-center sm:mt-10">
            <p className="ms-1 font-semibold text-gray-800 sm:mb-1 sm:ms-2">
              Many Palestinians in Gaza are unable to set up a GoFundMe due to
              restrictions on GoFundMe (and other fundraising platforms) for
              connecting Palestinian bank accounts to the website.
            </p>
            <br />
            <p className="ms-1 text-gray-800 sm:mb-1 sm:ms-2">
              For this reason many Palestinians have set up an initial
              fundraising page but need someone in the West to connect their
              bank account, and then commit to transfering the money to the
              desired recipient. Or they have been unable to set up a GoFundMe
              at all and need support to do that
            </p>
          </div>
          <Link
            href="https://docs.google.com/forms/d/15cm3Ujy3H7PMGfceLG3fpCi8jRd4Cip1wzjPgbGLKSU/viewform?ts=66269362&edit_requested=true"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button>Set up or connect a GoFundMe</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export { SignUp };
