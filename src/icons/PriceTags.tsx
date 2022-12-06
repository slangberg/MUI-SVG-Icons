import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgPriceTags = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M28.875 0h-9c-.619 0-1.483.358-1.921.796L6.795 11.955a1.127 1.127 0 0 0 0 1.591l9.659 9.659a1.127 1.127 0 0 0 1.591 0l11.159-11.159c.437-.437.795-1.302.795-1.92v-9c0-.619-.506-1.125-1.125-1.125zM23.25 9a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z" />,
    <path d="M3 12.75 15.75 0h-1.875c-.619 0-1.483.358-1.921.796L.795 11.955a1.127 1.127 0 0 0 0 1.591l9.659 9.659a1.127 1.127 0 0 0 1.591 0l.704-.704-9.75-9.75z" />
  ),
  "PriceTags"
);
export default SvgPriceTags;
