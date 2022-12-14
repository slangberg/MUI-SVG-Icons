import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgCommand = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M17.25 21a3.754 3.754 0 0 1-3.75-3.75V15h-3v2.25c0 2.068-1.682 3.75-3.75 3.75S3 19.318 3 17.25s1.682-3.75 3.75-3.75H9v-3H6.75C4.682 10.5 3 8.818 3 6.75S4.682 3 6.75 3s3.75 1.682 3.75 3.75V9h3V6.75C13.5 4.682 15.182 3 17.25 3S21 4.682 21 6.75s-1.682 3.75-3.75 3.75H15v3h2.25c2.068 0 3.75 1.682 3.75 3.75S19.318 21 17.25 21zM15 15v2.25c0 1.241 1.009 2.25 2.25 2.25s2.25-1.009 2.25-2.25S18.491 15 17.25 15H15zm-8.25 0c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25S9 18.491 9 17.25V15H6.75zm3.75-1.5h3v-3h-3v3zM15 9h2.25c1.241 0 2.25-1.009 2.25-2.25S18.491 4.5 17.25 4.5 15 5.509 15 6.75V9zM6.75 4.5C5.509 4.5 4.5 5.509 4.5 6.75S5.509 9 6.75 9H9V6.75A2.252 2.252 0 0 0 6.75 4.5z" />
  ),
  "Command"
);
export default SvgCommand;
