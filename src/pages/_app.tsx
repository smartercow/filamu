import "@/styles/globals.scss";
import "@/styles/main.scss";
import "@/styles/utils.scss";
import "@/styles/radix-ui/navigation-menu.css";
import "@fontsource/dosis/200.css";
import "@fontsource/dosis/300.css";
import "@fontsource/dosis/400.css";
import "@fontsource/dosis/500.css";
import "@fontsource/dosis/600.css";
import "@fontsource/dosis/700.css";
import "@fontsource/dosis/800.css";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Database } from "@/types/supabase-types";
import { WindowContextProvider } from "@/lib/context/window-context";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import AuthModal from "@/components/modal/auth-modal";
import { RecoilRoot } from "recoil";
import SubscriptionModal from "@/components/modal/subscription-modal";
import UserContextProvider from "@/lib/context/user-context";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps) {
  const isDashboardPath = router.pathname.startsWith("/dashboard");
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );

  useEffect(() => {
    // our dropdowns are used for navigation a lot
    // they work off css focus states, so they don't get removed
    // on navigation transitions.  this is a hack to force them to
    const element = window?.document?.activeElement as HTMLElement;
    if (typeof element?.blur === "function") {
      element.blur();
    }
  }, [router.asPath]);
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={queryClient}>
        <WindowContextProvider>
          <RecoilRoot>
            <UserContextProvider>
              <Header />
              <Component {...pageProps} />
              <Footer />
              <AuthModal />
              <SubscriptionModal />
              <ToastContainer />
            </UserContextProvider>
          </RecoilRoot>
        </WindowContextProvider>
      </QueryClientProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
