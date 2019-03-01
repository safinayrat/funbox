import { withBemMod } from "@bem-react/core";
import { cnProduct } from "../Product";
import "./selectedHover.css";

export const SelectedHoverTheme = withBemMod(cnProduct, {
  selectedHover: true
});
