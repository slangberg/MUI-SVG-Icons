import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgStopwatch = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M12 4.528V3h3V1.5A1.5 1.5 0 0 0 13.5 0H9a1.5 1.5 0 0 0-1.5 1.5V3h3v1.528c-5.034.383-9 4.589-9 9.722 0 5.385 4.365 9.75 9.75 9.75S21 19.635 21 14.25c0-5.132-3.966-9.339-9-9.722zm4.553 15.025c-1.417 1.417-3.3 2.197-5.303 2.197s-3.887-.78-5.303-2.197c-1.417-1.417-2.197-3.3-2.197-5.303s.78-3.887 2.197-5.303a7.45 7.45 0 0 1 5.065-2.193l-.508 7.36c-.044.616.292.886.746.886s.79-.27.746-.886l-.508-7.36a7.442 7.442 0 0 1 5.065 2.193c1.417 1.417 2.197 3.3 2.197 5.303s-.78 3.887-2.197 5.303z" />
  ),
  "Stopwatch"
);
export default SvgStopwatch;
