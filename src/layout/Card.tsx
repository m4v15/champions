import Link from 'next/link';

type ICardProps = {
  title: string;
  url: string;
  imageUrl: string;
  target: string;
  progress: string;
};

export const Card = (props: ICardProps) => (
  <div className="m-2 max-w-sm rounded-lg border border-gray-200 bg-white shadow">
    <Link href={props.url} rel="noopener noreferrer" target="_blank">
      <img className="rounded-t-lg" src={props.imageUrl} alt="" />
    </Link>
    <div className="p-5">
      <Link href={props.url} rel="noopener noreferrer" target="_blank">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {props.title}
        </h5>
      </Link>
      <div className="mb-3 flex items-center justify-start">
        <p className="mr-2 text-xl font-bold text-gray-700">
          {props.progress} raised so far
        </p>
      </div>
      <Link
        href={`${props.url}/donate`}
        className="inline-flex items-center rounded-lg bg-red-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 "
        rel="noopener noreferrer"
        target="_blank"
      >
        Donate
        <svg
          className="ms-2 size-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  </div>
);
