import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgUserPlus = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M9 17.25c0-3.545 2.247-6.574 5.391-7.739A6.842 6.842 0 0 0 15 6.75C15 3.022 15 0 10.5 0S6 3.022 6 6.75c0 2.322 1.348 4.643 3 5.574v1.237c-5.088.416-9 2.916-9 5.939h9.312A8.234 8.234 0 0 1 9 17.25z" />,
    <path d="M17.25 10.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM21 18h-3v3h-1.5v-3h-3v-1.5h3v-3H18v3h3V18z" />
  ),
  "UserPlus"
);
export default SvgUserPlus;
