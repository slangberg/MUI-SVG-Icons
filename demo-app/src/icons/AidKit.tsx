import * as React from "react";
import { SVGProps } from "react";
const SvgAidKit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 6h-4.5V3c0-.825-.675-1.5-1.5-1.5H9c-.825 0-1.5.675-1.5 1.5v3H3C1.35 6 0 7.35 0 9v12c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V9c0-1.65-1.35-3-3-3zM9 3h6v3H9V3zm9 13.5h-4.5V21h-3v-4.5H6v-3h4.5V9h3v4.5H18v3z" />
  </svg>
);
export default SvgAidKit;
