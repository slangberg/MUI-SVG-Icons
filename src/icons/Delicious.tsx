import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgDelicious = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M0 0v24h24V0H0zm12 22.5V12H1.5V1.5H12V12h10.5v10.5H12z" />
  ),
  "Delicious"
);
export default SvgDelicious;
