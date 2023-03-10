import Head from "next/head";

type AppHeadProps = {
  title?: string;
};

export function AppHead({ title }: AppHeadProps): JSX.Element {
  return (
    <Head>
      <title>{title ? `${title} - ` : ""}Filamu</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1, maximum-scale=1,user-scalable=0,viewport-fit=cover"
      />
      <meta name="og:title" content="Filamu" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <meta name="filamu:site" content="@smartercow" />
      <meta name="filamu:card" content="summary_large_image" />
    </Head>
  );
}
