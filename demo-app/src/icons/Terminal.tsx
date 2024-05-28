import * as React from "react";
import { SVGProps } from "react";
const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 1.5v21h24v-21H0zM22.5 21h-21V3h21v18zM21 4.5H3v15h18v-15zM10.5 12H9v1.5H7.5V15H6v-1.5h1.5V12H9v-1.5H7.5V9H6V7.5h1.5V9H9v1.5h1.5V12zm6 3H12v-1.5h4.5V15z" />
  </svg>
);
export default SvgTerminal;
