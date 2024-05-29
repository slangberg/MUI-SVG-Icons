import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgMenu = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M1.5 4.5h21V9h-21zm0 6h21V15h-21zm0 6h21V21h-21z" />
  ),
  "Menu"
);
export default SvgMenu;
