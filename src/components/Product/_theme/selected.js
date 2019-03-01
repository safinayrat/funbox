import { withBemMod } from "@bem-react/core";
import { cnProduct } from "../Product";
import "./selected.css";

export const SelectedTheme = withBemMod(cnProduct, { selected: true });
