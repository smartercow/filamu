import { Button } from "@/components/ui/button";
import useAccountBillingStatus from "@/utils/api/use-account-billing-status";
import { useMutation } from "@tanstack/react-query";
import SettingsCard from "../shared/settings-card";

type Props = {
  accountId: string;
};

const AccountSubscription = ({ accountId }: Props) => {
  const { data } = useAccountBillingStatus(accountId);

  const getSubscriptionUrl = useMutation(
    async () => {
      const res = await fetch("/api/billing/portal-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accountId }),
      });
      const { url } = await res.json();
      return url;
    },
    {
      onSuccess(url) {
        window.location.href = url;
      },
    }
  );

  return (
    <SettingsCard
      title="Your Plan"
      description="You can upgrade or downgrade your plan at any time"
    >
      <SettingsCard.Body>
        <h2 className="h4">
          {data?.plan_name} - {data?.status}
        </h2>
        <p>Your billing email is {data?.billing_email}</p>
      </SettingsCard.Body>
      <SettingsCard.Footer>
        <Button
          color="primary"
          loading={getSubscriptionUrl.isLoading}
          onClick={() => getSubscriptionUrl.mutate()}
        >
          Update plan settings
        </Button>
      </SettingsCard.Footer>
    </SettingsCard>
  );
};

export default AccountSubscription;
