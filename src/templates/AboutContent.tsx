import { useRouter } from 'next/router';

import { Section } from '../layout/Section';

const AboutContent = () => {
  const router = useRouter();

  return (
    <Section yPadding="pb-32">
      <div className="mt-5 flex flex-wrap items-center text-gray-950">
        <div className="w-full text-left sm:w-1/2 sm:px-6">
          We&apos;re two people who used to work in Gaza, connecting our network
          in Gaza to friends and acquaintances from around the world who act as
          “champions” for their fund.
          <br />
          <br />
          We assign an individual GoFundMe to the champion, and then they
          fundraise for the family using online and offline methods. We also
          connect them directly to the Gazan they are supporting as a pen pal.
          <br />
          <br />
          So far, we have around 60 active champions who are in a WhatsApp group
          supporting each other with creative fundraising ideas. This initiative
          has gone above and beyond our dreams for it— in one week we saw the
          funds we&apos;ve been championing raise over $96,000 and many
          individuals have been able to evacuate as a result.
          <br />
          <br />
          Beyond directly supporting the safety of families in Gaza, this
          initiative offers other gifts. It gives us allies on the outside a
          chance to convert our passive support of Gaza into an active one by
          stretching our creativity and intellect and taking matters into our
          own hands. It roots us into our personal and collective power. If our
          government will not protect and uphold Palestinian life, then we will.
          It also gives us, some who are witnessing genocide and others who are
          enduring it, a chance to say, “I&apos;ve made a new friend.” This to
          me is true solidarity. True resistance and true love. If you&apos;d
          like to join our small but mighty movement, register by clicking the
          sign up button above.
        </div>
        <div className="w-full p-1 sm:w-1/2">
          <img
            src={`${router.basePath}/assets/images/about-image.jpeg`}
            alt="us in Gaza"
          />
        </div>
      </div>
    </Section>
  );
};

export { AboutContent };
