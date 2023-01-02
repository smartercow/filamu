/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { SubscriptionModalState } from "@/lib/states/subscription-state";
import Modal from "../modal/modal";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SubscriptionHeader from "./subscription-header";
import type { ChangeEvent, SVGProps } from "react";

export type FormType = {
  name: string;
  email: string;
  uid: string;
};

const plans = [
  {
    name: "Monthly",
    price: "1,099 Ksh",
    period: "month",
  },
  {
    name: "Annual",
    price: "9,899 Ksh",
    period: "year",
  },
];

const payment = [
  {
    name: "Credit card",
    logo: "/assets/images/payment/credit-cards.png",
    payWith: "card",
  },
  {
    name: "M-Pesa",
    logo: "/assets/images/payment/m-pesa.png",
    payWith: "M-Pesa",
  },
];

const initialForm = {
  name: "",
  email: "",
  uid: "",
};

export default function SubscriptionModal() {
  const [selectedPrice, setSelectedPrice] = useState(plans[0]);
  const [selectedPayment, setSelectedPayment] = useState(payment[0]);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const [subscriptionState, setSubscriptionState] = useRecoilState(
    SubscriptionModalState
  );

  // const { user, signOut } = useAuth();

  const [form, setForm] = useState(initialForm);

  const { name, email, uid } = form;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /*   useEffect(() => {
    if (user) {
      setForm({ ...form, name: user.name, email: user.email, uid: user.id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]); */

  useEffect(() => {
    if (name && email && acceptTerms) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [name, email, acceptTerms]);

  /*   const handleSignout = () => {
    setSubscriptionState((prev) => ({
      ...prev,
      open: false
    }));
    void signOut();
  }; */

  return (
    <Modal
      open={subscriptionState.open}
      closeModal={() => {}}
      className="dosis max-w-xs overflow-hidden rounded-lg bg-white shadow-lg md:max-w-md"
    >
      <div className="w-full ">
        <SubscriptionHeader title="Select your plan to get started" />{" "}
        {/* OLD */}
        <div className="mx-auto flex w-full flex-col gap-4 py-4 px-5 md:gap-6 md:px-8">
          <RadioGroup
            id="price"
            value={selectedPrice}
            onChange={setSelectedPrice}
          >
            <RadioGroup.Label className="sr-only">Price</RadioGroup.Label>
            <div className="flex flex-col gap-2 md:flex-row">
              {plans.map((plan, i) => (
                <RadioGroup.Option
                  key={i}
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
                              className={`hover-animation font-medium ${
                                checked ? "text-gray-900" : "text-gray-900"
                              }`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline text-sm font-bold ${
                                checked ? "text-gray-500" : "text-gray-500"
                              }`}
                            >
                              <span>
                                {plan.price}/{plan.period}
                              </span>{" "}
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

          <RadioGroup
            id="payment"
            value={selectedPayment}
            onChange={setSelectedPayment}
          >
            <RadioGroup.Label className="sr-only">
              Subscription period
            </RadioGroup.Label>
            <div className="flex gap-2">
              {payment.map((method, i) => (
                <RadioGroup.Option
                  key={i}
                  value={method}
                  className={({ checked }) =>
                    `${
                      checked
                        ? "text-black ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                        : "bg-white"
                    }
                    relative flex w-full cursor-pointer rounded-lg border px-2 py-1 shadow-md focus:outline-none md:px-5`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center md:max-w-[110px]">
                          <div className="text-sm">
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-gray-500" : "text-gray-500"
                              }`}
                            >
                              <img
                                src={method.logo}
                                alt={method.name}
                                className="h-10 w-32 object-contain"
                              />
                              <p className="text-center text-xs font-semibold">
                                Pay with {method.payWith}
                              </p>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        <div className="flex w-7 shrink-0 justify-end text-white">
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

          <div className="flex flex-col items-center gap-3">
            <div className="mb-1 flex items-center gap-1">
              <input
                type="checkbox"
                name="remember"
                value="Remember me"
                className="h-4 w-4"
                onChange={() => setAcceptTerms(!acceptTerms)}
              />
              <label
                htmlFor="remember"
                className="inter text-xs text-main-gray"
              >
                I have read and accept the{" "}
                <span>
                  <a className="font-semibold text-primary" href="#">
                    Terms of Service
                  </a>
                </span>{" "}
                and{" "}
                <span>
                  <a className="font-semibold text-primary" href="#">
                    Privacy
                  </a>
                </span>
                .
              </label>
            </div>
            <Button
              type="button"
              disabled={disabledBtn}
              className="hover-animation inline-flex w-full justify-center rounded-md bg-primary py-2 px-2 
                         text-sm font-medium normal-case text-white shadow-sm hover:bg-opacity-80 md:px-4 md:text-lg"
            >
              Buy a Subscription {selectedPrice.price}/{selectedPrice.period}
            </Button>

            <button
              type="button"
              className="hover-animation inline-flex w-32 justify-center rounded-md border border-transparent py-2 px-4
                         text-sm font-bold uppercase text-red-500 shadow-sm hover:bg-red-200"
              // onClick={handleSignout}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

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
