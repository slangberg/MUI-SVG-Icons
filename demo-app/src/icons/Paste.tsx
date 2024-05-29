import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
const SvgPaste = createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    <path d="M16.5 3h-3V1.5C13.5.675 12.825 0 12 0H9c-.825 0-1.5.675-1.5 1.5V3h-3v3h12V3zM12 3H9V1.503l.003-.003h2.995l.003.003V3zm7.5 4.5V3.75a.752.752 0 0 0-.75-.75h-1.5v1.5H18v3h-4.5L9 12v6H3V4.5h.75V3h-1.5a.752.752 0 0 0-.75.75v15c0 .413.337.75.75.75H9V24h15V7.5h-4.5zm-6 2.121V12h-2.379L13.5 9.621zm9 12.879h-12v-9H15V9h7.5v13.5z" />
  ),
  "Paste"
);
export default SvgPaste;
