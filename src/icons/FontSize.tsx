import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgFontSize = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M1.5 12h9v3h-3v9h-3v-9h-3zm21-6h-5.9v18h-3.199V6h-5.9V3h15z" />
  ),
  "FontSize"
);
export default SvgFontSize;
