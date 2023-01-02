/* eslint-disable @next/next/no-img-element */
import { FilamuLogo, FilamuLogoLarge } from "@/utils/filamu/logo";
import Link from "next/link";

export function HeaderLogo(): JSX.Element {
  return (
    <>
      <div className="inline-flex md:hidden">
        <FilamuLogo className="h-7 sm:h-9" />
      </div>
      <div className="hidden h-16 md:mr-10 md:inline-flex">
        <FilamuLogoLarge className="h-14" />
      </div>
    </>
  );
}
