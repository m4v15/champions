import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-left">
    <h1 className="whitespace-pre-line text-2xl font-bold leading-hero text-gray-100">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-xl text-gray-100">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
