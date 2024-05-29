import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgPieChart = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M10.5 13.5V3C4.701 3 0 7.701 0 13.5S4.701 24 10.5 24 21 19.299 21 13.5c0-1.688-.399-3.283-1.107-4.696L10.5 13.5zm10.893-7.696A10.5 10.5 0 0 0 12 0v10.5l9.393-4.696z" />
  ),
  "PieChart"
);
export default SvgPieChart;
