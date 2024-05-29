import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgVideoCamera = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M9 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0zm-9 0a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0zm18 7.5V12c0-.825-.675-1.5-1.5-1.5h-15c-.825 0-1.5.675-1.5 1.5v7.5c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-2.25L24 21V10.5l-6 3.75zM15 18H3v-4.5h12V18z" />
  ),
  "VideoCamera"
);
export default SvgVideoCamera;
