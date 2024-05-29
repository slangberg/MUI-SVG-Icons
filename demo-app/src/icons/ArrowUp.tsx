import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgArrowUp = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M12 .75.75 12H7.5v12h9V12h6.75z" />
  ),
  "ArrowUp"
);
export default SvgArrowUp;
