import { atom } from "recoil";

interface MenuState {
  open: boolean;
}

const defaultMenuState: MenuState = {
  open: false,
};

export const MenuState = atom<MenuState>({
  key: "menuState",
  default: defaultMenuState,
});
