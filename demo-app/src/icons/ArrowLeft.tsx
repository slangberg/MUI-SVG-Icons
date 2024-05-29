import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgArrowLeft = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M.75 12 12 23.25V16.5h12v-9H12V.75z" />
  ),
  "ArrowLeft"
);
export default SvgArrowLeft;
