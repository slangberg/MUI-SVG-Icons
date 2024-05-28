import * as React from "react";
import { SVGProps } from "react";
const SvgClipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21.75 3H15a3 3 0 1 0-6 0H2.25a.75.75 0 0 0-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75zM12 1.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 12 1.5zm9 21H3v-18h3v2.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V4.5h3v18z" />
    <path d="M10.5 20.121 5.689 14.56l1.371-1.371 3.439 2.689 6.439-5.689 1.371 1.371z" />
  </svg>
);
export default SvgClipboard;
