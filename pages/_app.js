import { ThemeProvider } from 'next-themes';

import { DataProvider } from '@/context';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </ThemeProvider>
  );
}

export default MyApp;
