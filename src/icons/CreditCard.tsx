import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgCreditCard = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M21.75 3H2.25A2.257 2.257 0 0 0 0 5.25v13.5A2.257 2.257 0 0 0 2.25 21h19.5A2.257 2.257 0 0 0 24 18.75V5.25A2.257 2.257 0 0 0 21.75 3zM2.25 4.5h19.5a.76.76 0 0 1 .75.75V7.5h-21V5.25a.76.76 0 0 1 .75-.75zm19.5 15H2.25a.76.76 0 0 1-.75-.75V12h21v6.75a.76.76 0 0 1-.75.75zM3 15h1.5v3H3zm3 0h1.5v3H6zm3 0h1.5v3H9z" />
  ),
  "CreditCard"
);
export default SvgCreditCard;
