import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MIT Licence Generator</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
