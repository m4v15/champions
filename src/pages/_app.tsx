import '../styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

import Layout from './layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
    <Analytics />
  </Layout>
);

export default MyApp;
