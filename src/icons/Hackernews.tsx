import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgHackernews = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M0 0v24h24V0H0zm12.75 13.688v5.063h-1.5v-5.063L7.148 6H8.85L12 11.906 15.15 6h1.702l-4.102 7.688z" />
  ),
  "Hackernews"
);
export default SvgHackernews;
