import * as React from "react";
import { SVGProps } from "react";
const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m24 13.5-3-6h-4.5v-3c0-.825-.675-1.5-1.5-1.5H1.5C.675 3 0 3.675 0 4.5v12L1.5 18h1.902a3 3 0 1 0 5.196 0h8.305a3 3 0 1 0 5.196 0h1.902v-4.5zm-7.5 0V9h3.109l2.25 4.5H16.5z" />
  </svg>
);
export default SvgTruck;
