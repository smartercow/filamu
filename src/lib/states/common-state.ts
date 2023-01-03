import { atom } from "recoil";

/* export const ProtectedPathState = atom({
  key: "protectedPathState",
  default: false,
}); */

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
