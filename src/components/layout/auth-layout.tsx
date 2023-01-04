/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "@/lib/states/auth-state";
import { SubscriptionModalState } from "@/lib/states/subscription-state";
import { sleep } from "@/lib/utils";
import { Placeholder } from "../common/placeholder";
import type { LayoutProps } from "./common-layout";

export function AuthLayout({ children }: LayoutProps): JSX.Element {
  const user = "";
  const loading = false;
  const subscriber = false;

  const router = useRouter();
  const pathname = usePathname();

  const [pending, setPending] = useState(true);
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const setSubscriptionState = useSetRecoilState(SubscriptionModalState);
  const protectedPath = pathname?.startsWith("/account");

  useEffect(() => {
    const checkLogin = async (): Promise<void> => {
      setPending(true);

      if (user && !loading) {
        await sleep(500);
        void setAuthModalState({ open: false, view: "login" });
      } else if (!user && !loading && protectedPath) {
        await sleep(300);
        void router.replace("/");
      }

      if (!loading) {
        await sleep(500);
        setPending(false);
      }
    };

    void checkLogin();
  }, [user, loading]);

  useEffect(() => {
    if (user && !subscriber) {
      setSubscriptionState({ open: true, view: "billing" });
    }
  }, [user, subscriber]);

  if (loading || pending) return <Placeholder />;

  return <>{children}</>;
}
