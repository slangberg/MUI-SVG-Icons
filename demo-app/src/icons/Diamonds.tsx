import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgDiamonds = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M12 0 4.5 12 12 24l7.5-12z" />
  ),
  "Diamonds"
);
export default SvgDiamonds;
