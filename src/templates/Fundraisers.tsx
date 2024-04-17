import { GfmsContainer } from '@/layout/GfmsContainer';
import { Meta } from '@/layout/Meta';
import { NavBar } from '@/templates/NavBar';
import { AppConfig } from '@/utils/AppConfig';

function Fundraisers() {
  return (
    <div className="text-black antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <NavBar></NavBar>
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="w-full text-left">
          <div className="font-bold">Funds We&apos;re Supporting</div>
          <br />
          All of these funds come from people in Gaza we know personally, or
          else friends of people we know personally. Please support and donate
          to as many as you can. <br />
          <br />
          <br />
        </div>
        <GfmsContainer />
      </div>
    </div>
  );
}

export { Fundraisers };
