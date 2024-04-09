import Link from 'next/link';

import { Button } from '@/button/Button';

import { Section } from '../layout/Section';

const AboutContent = () => {
  // const router = useRouter();

  return (
    <Section yPadding="pb-32">
      <div className="mt-5 flex flex-col items-center text-gray-950">
        <div className="w-full text-left">
          <div className="font-bold">About us</div>
          <br />
          This initiative is led by Anam Raheem and Matt Davis, two friends and
          former colleagues who worked at Gaza Sky Geeks, a community center and
          tech hub in Gaza City. Gaza Sky Geeks is an initiative of Mercy Corps,
          an international aid organization. <br />
          At Gaza Sky Geeks, Matt and Anam gained a big, beautiful community of
          coworkers and friends who now need our support to survive genocide.
          <br />
          <br />
          <div className="font-bold">About the initiative</div>
          <br />
          For a Gazan to leave Gaza, they must pay fees at the rate of
          $5000/adult and $2500/child to Egyptian-state affiliated company Hala.
          Many people in Gaza have turned to GoFundMe to raise the funds needed
          to register their families for evacuation at the Rafah border
          crossing. <br />
          <br />
          We are connecting allies from around the world who are interested in
          being a volunteer champion for a Gazan family&apos;s fundraiser. We
          assign an individual GoFundMe to the champion, and then they fundraise
          for the family using online and offline methods. We also connect them
          directly to the Gazan they are supporting as a pen pal. <br />
          <br />
          So far, we have over 60 active champions who are in a supportive
          WhatsApp group sharing creative fundraising ideas. This initiative has
          gone above and beyond our dreams for it— in one week we saw the funds
          we&apos;ve been championing raise over $96,000 and many individuals
          have been able to evacuate as a result. <br />
          <br />
          Beyond directly supporting the safety of families in Gaza, this
          initiative offers other gifts. It gives us allies on the outside a
          chance to convert our passive support of Gaza into an active one by
          stretching our creativity and intellect and taking matters into our
          own hands. It roots us into our personal and collective power. If our
          government will not protect and uphold Palestinian life, then we will.
          It also gives us, some who are witnessing genocide and others who are
          enduring it, a chance to say, “I&apos;ve made a new friend.” This is
          true solidarity, true resistance, and true love. <br />
          <br />
          If you&apos;d like to join our small but mighty movement, register by
          clicking the button below.
        </div>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdQBwxbU97VXa9Phi4ACSrQMfIJNp6ZFPfQvhAjJ2J1ekoMJg/viewform"
          rel="noopener noreferrer"
          target="_blank"
          className="pt-10"
        >
          <Button>Become A Champion</Button>
        </Link>
        {/* <div className="w-full p-1 sm:w-1/2">
          <img
            src={`${router.basePath}/assets/images/about-image.jpeg`}
            alt="us in Gaza"
          />
        </div> */}
      </div>
    </Section>
  );
};

export { AboutContent };
