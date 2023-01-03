import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileAvatar from "./avatar-profile";

const detailLinks = [
  { name: "Profile", href: "/account/profile" },
  { name: "Favorites", href: "/account/favorites" },
  { name: "Rated Content", href: "/account/rated" },
  { name: "Billing", href: "/account/billing" },
  { name: "Change password", href: "/account/change-password" },
];
export default function ProfileAside(): JSX.Element {
  const pathname = usePathname();
  const supabase = useSupabaseClient();

  return (
    <div
      className="dosis mt-14 h-full w-full max-w-sm space-y-4 rounded-md border-4 border-main-blue-sec bg-main-darkblue 
               py-8 md:mt-0 md:max-w-[15rem]"
    >
      <ProfileAvatar />
      <div className="border-y border-main-blue-sec py-4 pl-7">
        <div className="pb-2">
          <p className="inter text-sm font-light text-main-gray">
            Account Details
          </p>
        </div>
        <li className="list-none space-y-2">
          {detailLinks.slice(0, 3).map((item) => {
            if (pathname?.startsWith(item.href))
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold uppercase text-secondary"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            else
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold uppercase"
                  >
                    {item.name}
                  </Link>
                </li>
              );
          })}
        </li>
      </div>
      <div className="pl-7 pb-3">
        <div className="pb-2">
          <p className="inter text-sm font-light text-main-gray">
            Other Details
          </p>
        </div>
        <ul className="space-y-2">
          {detailLinks.slice(3, 4).map((item) => {
            if (pathname?.startsWith(item.href))
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold uppercase text-secondary"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            else
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold uppercase"
                  >
                    {item.name}
                  </Link>
                </li>
              );
          })}
          <li
            className="hover-animation cursor-pointer text-sm font-semibold uppercase hover:text-secondary"
            onClick={() => supabase.auth.signOut()}
          >
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
}
