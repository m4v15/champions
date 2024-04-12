import { Card } from '@/layout/Card';

import GFMs from '../data/GFMS.json';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { NavBar } from './NavBar';

const Fundraisers = () => (
  <div className="text-black antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavBar></NavBar>
    <div className="mx-auto max-w-screen-xl px-3">
      <div className="w-full text-left">
        <div className="font-bold">Funds We&apos;re Supporting</div>
        <br />
        All of these funds come from people in Gaza we know personally, or else
        friends of people we know personally. Please support and donate to as
        many as you can. <br />
        <br />
        <br />
      </div>
      <div className="flex flex-wrap">
        {GFMs.map((gfm) => (
          <Card
            title={gfm.title}
            imageUrl={gfm.imageURL}
            progress={gfm.progress}
            url={gfm.url}
            target={gfm.target}
            key={gfm.url}
          />
        ))}
      </div>
    </div>
  </div>
);

export { Fundraisers };
