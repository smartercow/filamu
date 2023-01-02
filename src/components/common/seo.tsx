import { usePathname } from "next/navigation";
import Head from "next/head";
import { siteURL } from "@/types/env";

type HeadProps = {
  title: string;
  image?: string;
  description?: string;
};

export function SEO({ title, image, description }: HeadProps): JSX.Element {
  const asPath = usePathname();

  return (
    <Head>
      <title>{title} / Filamu</title>
      <meta name="og:title" content={title} />
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta
        name="og:url"
        content={`${siteURL}${asPath === "/" ? "" : asPath}`}
      />
    </Head>
  );
}
