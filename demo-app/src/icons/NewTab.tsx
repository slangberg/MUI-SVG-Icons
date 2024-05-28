import * as React from "react";
import { SVGProps } from "react";
const SvgNewTab = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4.5 1.5v18h18v-18h-18zM21 18H6V3h15v15zM3 21V5.25l-1.5-1.5V22.5h18.75l-1.5-1.5H3z" />
    <path d="M8.25 6 12 9.75l-4.5 4.5 2.25 2.25 4.5-4.5L18 15.75V6z" />
  </svg>
);
export default SvgNewTab;
