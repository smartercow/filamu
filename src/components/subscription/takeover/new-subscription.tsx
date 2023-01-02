import { useMemo, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import useAccountBillingOptions from "@/utils/api/use-account-billing-options";
import IndividualSubscriptionPlan from "./individual-subscription-plan";
import type { ChangeEvent, SVGProps } from "react";

const NewSubscription = ({ currentAccount }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [tabs, setTabs] = useState([]);

  const { data } = useAccountBillingOptions(currentAccount?.account_id, {
    onSuccess(data) {
      const options = new Set(data?.map((option) => option.interval));
      setTabs(Array.from(options));
      if (!activeTab || !options.has(activeTab)) {
        setActiveTab(Array.from(options)[0]);
      }
    },
  });

  const currentOptions = useMemo(() => {
    return data?.filter((option) => option.interval === activeTab) || [];
  }, [data, activeTab]);

  return (
    <div className="space-y-3 p-4 text-center">
      <RadioGroup id="price" value={activeTab} onChange={setActiveTab}>
        <RadioGroup.Label className="sr-only">Price</RadioGroup.Label>
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          {tabs.map((plan, i) => (
            <RadioGroup.Option
              key={`subscription-group-${plan}`}
              value={plan}
              className={({ checked }) =>
                `${
                  checked
                    ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                    : "bg-white"
                }
                    relative flex w-full cursor-pointer rounded-lg border px-3 py-2 shadow-md focus:outline-none md:px-5 md:py-3`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="flex w-full items-center">
                      <div className="flex w-full flex-row items-center justify-between text-sm md:flex-col md:items-start">
                        <RadioGroup.Label
                          as="p"
                          className={`hover-animation text-sm font-bold uppercase ${
                            checked ? "text-gray-900" : "text-gray-900"
                          }`}
                        >
                          {plan === "month" && "Monthly"}
                          {plan === "year" && "Yearly"}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline text-sm ${
                            checked ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          <span>
                            {plan === "year" &&
                              "Billed annually (save up to 20%)"}
                            {plan === "month" && "Billed monthly"}
                          </span>
                        </RadioGroup.Description>
                      </div>
                    </div>
                    <div className="w-4 shrink-0 text-white md:w-6">
                      {checked && (
                        <CheckIcon className="h-4 w-4 md:h-5 md:w-5" />
                      )}
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <div className="flex justify-center gap-6">
        {currentOptions.map((option) => (
          <IndividualSubscriptionPlan
            key={`subscription-option-${option.price_id}`}
            plan={option}
            currentAccount={currentAccount}
          />
        ))}
      </div>
    </div>
  );
};

export default NewSubscription;

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#0597e3" opacity="1" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
