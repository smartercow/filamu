/* eslint-disable @next/next/no-img-element */
// import { CustomIcon } from "@components/ui/custom-icon";
import { SEO } from "./seo";

export function Placeholder(): JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center bg-main-darkblue">
      <SEO
        title="Filamu"
        description="Watch Kenyan films & TV programmes online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."
        image="/home.png"
      />
      {/*       <i>
        <CustomIcon className='h-40 w-40 ' iconName='FilamuIcon' />
      </i> */}
      <img
        src="/assets/filamu/logo.svg"
        alt="Filamu Logo"
        className="h-24 w-24 md:h-40 md:w-40"
      />
    </main>
  );
}
