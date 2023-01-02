/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import cn from "clsx";

type LogoProps = {
  className?: string;
};

export function FilamuLogo({ className }: LogoProps): JSX.Element {
  return (
    <>
      <Link href="/">
        <img
          src="/assets/filamu/logo.svg"
          className={cn("w-full select-none", className)}
          alt="Filamu Logo"
        />
      </Link>
    </>
  );
}

export function FilamuLogoLarge({ className }: LogoProps): JSX.Element {
  return (
    <>
      <Link href="/">
        <img
          src="/assets/filamu/logo-lg.svg"
          className={cn("select-none ", className)}
          alt="Filamu Logo"
        />
      </Link>
    </>
  );
}
