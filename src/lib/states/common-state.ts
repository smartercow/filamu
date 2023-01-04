import { atom } from "recoil";

interface TrailerModalState {
  open: boolean;
  title?: string;
  embedId?: string;
}

const defaultModalState: TrailerModalState = {
  open: false,
  title: "",
  embedId: "",
};

export const TrailerModalState = atom<TrailerModalState>({
  key: "trailerModalState",
  default: defaultModalState,
});

// ------------------------------
interface SortByState {
  value?: string;
}

const defaultSortByState: SortByState = {
  value: "pop_desc",
};

export const SortByState = atom<SortByState>({
  key: "sortByState",
  default: defaultSortByState,
});
