import Link from 'next/link';

type ExternalLinkProps = {
  url: string;
  text: string;
};

export const ExternalLink = (props: ExternalLinkProps) => (
  <Link
    href={props.url}
    rel="noopener noreferrer"
    target="_blank"
    className="italic underline decoration-pink-600 hover:decoration-pink-200"
  >
    {props.text}
  </Link>
);
