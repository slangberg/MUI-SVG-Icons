import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgPilcrow = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M9 0h12v3h-3v21h-3V3h-3v21H9V12A6 6 0 1 1 9 0z" />
  ),
  "Pilcrow"
);
export default SvgPilcrow;
