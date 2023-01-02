import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import cn from "clsx";
import { UseDashboardOverviewResponse } from "@/utils/api/use-dashboard-overview";
import { UseAccountBillingOptionsResponse } from "@/utils/api/use-account-billing-options";
import { Button } from "@/components/ui/button";

type Props = {
  plan: UseAccountBillingOptionsResponse[0];
  currentAccount: UseDashboardOverviewResponse[0];
};

const IndividualSubscriptionPlan = ({ plan, currentAccount }: Props) => {
  const router = useRouter();

  const setupCheckoutLink = useMutation(
    async () => {
      const res = await fetch("/api/billing/setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountId: currentAccount?.account_id,
          priceId: plan.price_id,
        }),
      });

      const jsonResponse = await res.json();

      if (!res.ok) {
        throw new Error(jsonResponse.error);
      }
      return jsonResponse.url;
    },
    {
      onSuccess(url) {
        console.log("whoooop", url);
        if (!url) return;
        window.location.href = url;
      },
      onError(error: any) {
        toast.error(error.message);
      },
    }
  );

  return (
    <div
      className={cn(
        "overflow-hidden rounded-md",
        plan.product_name === "Individual Plan"
          ? "individual-plan"
          : "family-plan"
      )}
    >
      <div className="flex w-64 flex-col justify-between border bg-black bg-opacity-50 p-6 text-left text-main-gray shadow-md">
        <div>
          <h3 className="text-xl font-semibold uppercase text-white">
            {plan.product_name}
          </h3>
          <p className="my-4">{plan.product_description}</p>
          <p>{plan.product_name === "Individual Plan" ? <p></p> : <></>}</p>
        </div>
        <div>
          <div className="my-4 flex items-baseline gap-1 text-white">
            <h4 className="text-xl uppercase">
              {new Intl.NumberFormat(router.locale, {
                style: "currency",
                currency: plan.currency,
                minimumFractionDigits: 0,
              }).format((plan.price || 0) / 100)}
            </h4>
            <p>/ {plan.interval}</p>
          </div>
          <Button
            className="hover-animation inline-flex w-full justify-center rounded-md border-primary bg-primary py-2 px-2 text-sm font-semibold 
              uppercase text-white shadow-sm hover:border-none hover:bg-primary/90 md:px-4 md:text-lg"
            loading={setupCheckoutLink.isLoading}
            onClick={() => setupCheckoutLink.mutate()}
          >
            Select Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndividualSubscriptionPlan;
