import { useEffect, useMemo } from "react";
import useDashboardOverview from "@/utils/api/use-dashboard-overview";
import { useRouter } from "next/router";
import useAccountBillingStatus from "@/utils/api/use-account-billing-status";
import { useSetRecoilState } from "recoil";
import { SubscriptionModalState } from "@/lib/states/subscription-state";
import { useSessionContext } from "@supabase/auth-helpers-react";

const UserContextProvider = ({ children }) => {
  const { session } = useSessionContext();
  const router = useRouter();
  const { accountId } = router.query;
  const setSubscriptionModal = useSetRecoilState(SubscriptionModalState);

  const { data } = useDashboardOverview();

  const currentAccount = useMemo(() => {
    if (!accountId) {
      return data?.find((a) => a.personal_account);
    }
    return data?.find((a) => a.account_id === accountId);
  }, [data, accountId]);

  const { data: subscriptionData } = useAccountBillingStatus(
    currentAccount?.account_id
  );

  useEffect(() => {
    if (!session) return;
    if (!["active", "trialing"].includes(subscriptionData?.status)) {
      setSubscriptionModal({ open: true, view: "billing" });
    } else {
      setSubscriptionModal({ open: false, view: "confirm" });
    }
  }, [subscriptionData?.status]);

  return <>{children}</>;
};

export default UserContextProvider;
