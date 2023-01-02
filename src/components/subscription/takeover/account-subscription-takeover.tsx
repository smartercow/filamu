/* eslint-disable no-constant-condition */
import { UseDashboardOverviewResponse } from "@/utils/api/use-dashboard-overview";
import useAccountBillingStatus from "@/utils/api/use-account-billing-status";
import { MANUAL_SUBSCRIPTION_REQUIRED } from "@/types/billing";
import SubscriptionHeader from "@/components/subscription/subscription-header";
import AccountSubscription from "../settings/account-subscription";
import NewSubscription from "./new-subscription";

type Props = {
  currentAccount: UseDashboardOverviewResponse[0];
};

const AccountSubscriptionTakeover = ({ currentAccount }: Props) => {
  const { data: subscriptionData } = useAccountBillingStatus(
    currentAccount?.account_id
  );
  return (
    <div className="">
      {[
        "incomplete_expired",
        "canceled",
        MANUAL_SUBSCRIPTION_REQUIRED,
      ].includes(subscriptionData?.status) && (
        <>
          <SubscriptionHeader title="Select your plan to get started" />
          <NewSubscription currentAccount={currentAccount} />
        </>
      )}
      {["incomplete", "past_due", "unpaid"].includes(
        subscriptionData?.status
      ) && (
        <>
          <SubscriptionHeader
            title="Update your payment method"
            description={
              (subscriptionData.status = "incomplete"
                ? "Your subscription is incomplete!"
                : (subscriptionData.status = "past_due"
                    ? "Your subscription is past due!"
                    : (subscriptionData.status =
                        "unpaid" && "Your subscription is unpaid!")))
            }
          />
          <AccountSubscription accountId={currentAccount.account_id} />
        </>
      )}
    </div>
  );
};

export default AccountSubscriptionTakeover;
