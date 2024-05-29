import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgSpinner = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M9 3a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm6.364 2.636a3 3 0 1 1 6 0 3 3 0 0 1-6 0zM19.5 12a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 19.5 12zm-2.636 6.364a1.5 1.5 0 1 1 3.001.001 1.5 1.5 0 0 1-3.001-.001zM10.5 21a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0zm-6.364-2.636a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0zm-.75-12.728a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 1 1-4.5 0zM1.313 12a1.688 1.688 0 1 1 3.377 0 1.688 1.688 0 0 1-3.377 0z" />
  ),
  "Spinner"
);
export default SvgSpinner;
