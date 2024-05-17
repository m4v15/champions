import '../styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

import { CenteredFooter } from '@/footer/CenteredFooter';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <CenteredFooter />

    <Analytics />
  </>
);

export default MyApp;
