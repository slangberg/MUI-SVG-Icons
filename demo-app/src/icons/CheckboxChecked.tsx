import * as React from "react";
import { SVGProps } from "react";
const SvgCheckboxChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 0H3C1.35 0 0 1.35 0 3v18c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM10.5 18.621 4.939 13.06l2.121-2.121 3.439 3.439 7.189-7.189 2.121 2.121-9.311 9.311z" />
  </svg>
);
export default SvgCheckboxChecked;
