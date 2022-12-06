import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgCheckmark = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M20.25 3 9 14.25 3.75 9 0 12.75l9 9 15-15z" />
  ),
  "Checkmark"
);
export default SvgCheckmark;
