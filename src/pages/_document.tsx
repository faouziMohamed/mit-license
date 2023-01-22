import { Html, Head, Main, NextScript } from "next/document";
const ogImgParams = {
  siteName: "MIT Licence Generator",
  description:
    "Generate a MIT Licence for your project and link it to your website or GitHub repository or any other place you want to let people know about the licence of your project.",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL}/images/mit.png`,
  theme: "dark",
  templateTitle: "MIT Licence Generator",
};
const ogImg = `https://og.mfaouzi.com/api/general?${new URLSearchParams(
  ogImgParams,
).toString()}`;

export default function Document() {
  return (
    <Html lang='en' className='w-full h-full dark'>
      <Head>
        <meta name='description' content={ogImgParams.description} />
        <meta name='og:title' content={ogImgParams.templateTitle} />
        <meta name='og:description' content={ogImgParams.description} />
        <meta name='og:image' content={ogImg} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@mfaouzi' />
        <meta name='twitter:creator' content='@mfaouzi' />
        <meta name='twitter:title' content={ogImgParams.templateTitle} />
        <meta name='twitter:description' content={ogImgParams.description} />
        <meta name='twitter:image' content={ogImg} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta
          name='msapplication-config'
          content='/favicons/browserconfig.xml'
        />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body className='w-full h-full bg-[#eeeeee] dark:bg-[#2f3235] text-slate-700 dark:text-[#d1d1d4]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
