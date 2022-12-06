import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgCamera = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M7.125 14.25a4.875 4.875 0 1 0 9.751-.001 4.875 4.875 0 0 0-9.751.001zM22.5 6h-5.25c-.375-1.5-.75-3-2.25-3H9C7.5 3 7.125 4.5 6.75 6H1.5C.675 6 0 6.675 0 7.5V21c0 .825.675 1.5 1.5 1.5h21c.825 0 1.5-.675 1.5-1.5V7.5c0-.825-.675-1.5-1.5-1.5zM12 20.906a6.656 6.656 0 1 1 0-13.312 6.656 6.656 0 0 1 0 13.312zM22.5 10.5h-3V9h3v1.5z" />
  ),
  "Camera"
);
export default SvgCamera;
