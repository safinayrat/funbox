import { withBemMod } from "@bem-react/core";
import { cnProduct } from "../Product";
import "./disabled.css";

export const DisabledTheme = withBemMod(cnProduct, { disabled: true });
