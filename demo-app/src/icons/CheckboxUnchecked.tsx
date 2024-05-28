import * as React from "react";
import { SVGProps } from "react";
const SvgCheckboxUnchecked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 0H3C1.35 0 0 1.35 0 3v18c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zm0 21H3V3h18v18z" />
  </svg>
);
export default SvgCheckboxUnchecked;
