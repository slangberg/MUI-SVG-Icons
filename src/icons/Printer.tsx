import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgPrinter = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M6 1.5h12v3H6v-3zM22.5 6h-21C.675 6 0 6.675 0 7.5V15c0 .825.675 1.5 1.5 1.5H6v6h12v-6h4.5c.825 0 1.5-.675 1.5-1.5V7.5c0-.825-.675-1.5-1.5-1.5zM3 10.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 3 10.5zM16.5 21h-9v-7.5h9V21z" />
  ),
  "Printer"
);
export default SvgPrinter;
