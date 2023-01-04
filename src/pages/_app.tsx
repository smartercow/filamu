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
import TrailerModal from "@/components/modal/trailer-modal";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );

  useEffect(() => {
    const element = window?.document?.activeElement as HTMLElement;
    if (typeof element?.blur === "function") {
      element.blur();
    }
  }, [router.asPath]);

  return (
    <WindowContextProvider>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <UserContextProvider>
              <>
                <Header />
                <Component {...pageProps} />
                <Footer />
              </>
              <AuthModal />
              <SubscriptionModal />
              <TrailerModal />
              <ToastContainer />
            </UserContextProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </SessionContextProvider>
    </WindowContextProvider>
  );
}

export default MyApp;
