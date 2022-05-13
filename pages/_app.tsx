import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER as string}
      appId={process.env.NEXT_PUBLIC_ID as string}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
