import Image from 'next/image';

const Logo = () => {
  return (
    <span className={`inline-flex items-center text-gray-900`}>
      <Image
        src="/android-chrome-192x192.png"
        alt="Some picture of mine"
        width={32}
        height={32}
      />
    </span>
  );
};

export { Logo };
