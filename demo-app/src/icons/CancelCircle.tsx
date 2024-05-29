import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgCancelCircle = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />,
    <path d="M15.75 6 12 9.75 8.25 6 6 8.25 9.75 12 6 15.75 8.25 18 12 14.25 15.75 18 18 15.75 14.25 12 18 8.25z" />
  ),
  "CancelCircle"
);
export default SvgCancelCircle;
