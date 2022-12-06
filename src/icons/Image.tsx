import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgImage = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="m22.497 3 .003.003v17.995l-.003.003H1.502l-.003-.003V3.003L1.502 3h20.995zm.003-1.5h-21C.675 1.5 0 2.175 0 3v18c0 .825.675 1.5 1.5 1.5h21c.825 0 1.5-.675 1.5-1.5V3c0-.825-.675-1.5-1.5-1.5z" />,
    <path d="M19.5 6.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zM21 19.5H3v-3l5.25-9 6 7.5h1.5L21 10.5z" />
  ),
  "Image"
);
export default SvgImage;
