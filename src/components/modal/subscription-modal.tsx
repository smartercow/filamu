import { useMemo } from "react";
import { SubscriptionModalState } from "@/lib/states/subscription-state";
import { Database } from "@/types/supabase-types";
import useDashboardOverview from "@/utils/api/use-dashboard-overview";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import AccountSubscriptionTakeover from "../subscription/takeover/account-subscription-takeover";
import Modal from "./modal";

export default function SubscriptionModal(): JSX.Element {
  const router = useRouter();
  const { accountId } = router.query;

  const [subscriptionModal, setSubscriptionModal] = useRecoilState(
    SubscriptionModalState
  );

  const { data } = useDashboardOverview();

  const currentAccount = useMemo(() => {
    if (!accountId) {
      return data?.find((a) => a.personal_account);
    }
    return data?.find((a) => a.account_id === accountId);
  }, [data, accountId]);

  const supabaseClient = useSupabaseClient<Database>();

  /*   const handleClose = () => {
    setSubscriptionModal((prev) => ({
      ...prev,
      open: false,
      view: "confirm",
    }));
  }; */

  const handleSignout = async () => {
    setSubscriptionModal((prev) => ({
      ...prev,
      open: false,
    }));
    await supabaseClient.auth.signOut();
  };

  return (
    <Modal
      open={subscriptionModal.open}
      closePanelOnClick={false}
      closeModal={() => {}}
      className="dosis max-w-md overflow-hidden rounded-lg bg-white shadow-lg md:max-w-xl"
    >
      <div className="w-full">
        <AccountSubscriptionTakeover currentAccount={currentAccount} />

        <div className="flex justify-center border-t bg-[#f6faff] p-4">
          <>
            <button
              className="rounded border-none py-1 px-2 font-bold uppercase text-main-darkblue transition-all duration-300 hover:bg-red-400/60 hover:text-white"
              onClick={handleSignout}
            >
              Log out
            </button>
          </>
        </div>
      </div>
    </Modal>
  );
}
