import { atom } from "recoil";

export interface SubscriptionModalState {
  open: boolean;
  view: "billing" | "confirm";
}

const defaultModalState: SubscriptionModalState = {
  open: false,
  view: "billing",
};

export const SubscriptionModalState = atom<SubscriptionModalState>({
  key: "SubscriptionModalState",
  default: defaultModalState,
});
