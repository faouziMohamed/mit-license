import { Html, Head, Main, NextScript } from "next/document";
const ogImgParams = {
  siteName: "MIT Licence Generator",
  description:
    "Generate a MIT Licence for your project and link it to your website or GitHub repository or any other place you want to let people know about the licence of your project.",
  logo: "https://avatars.githubusercontent.com/u/57812398?v=4",
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
      </Head>
      <Head />
      <body className='w-full h-full bg-[#eeeeee] dark:bg-[#222426] dark:text-[#e8e6e3]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
