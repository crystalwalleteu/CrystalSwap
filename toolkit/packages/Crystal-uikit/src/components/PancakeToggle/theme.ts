import { darkColors, lightColors } from "../../theme/colors";
import { PancrystalToggleTheme } from "./types";

export const light: PancrystalToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: PancrystalToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
