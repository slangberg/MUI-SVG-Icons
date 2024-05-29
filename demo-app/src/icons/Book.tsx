import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgBook = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M21 3v19.5H5.25a2.25 2.25 0 1 1 0-4.5H19.5V0h-15c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h18V3H21z" />,
    <path d="M5.251 19.5H5.25a.75.75 0 0 0 0 1.5h14.248v-1.5H5.251z" />
  ),
  "Book"
);
export default SvgBook;
