import { atom } from "recoil";
export const dark = atom({
  key: "darkMode",
  default: false,
});
export const Period = atom({
  key: "Period",
  default: "Annual",
})
