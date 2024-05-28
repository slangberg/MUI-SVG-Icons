import * as React from "react";
import { SVGProps } from "react";
const SvgSwitch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15 3.436v3.187c.849.37 1.629.9 2.303 1.575 1.417 1.417 2.197 3.3 2.197 5.303s-.78 3.887-2.197 5.303c-1.417 1.417-3.3 2.197-5.303 2.197s-3.887-.78-5.303-2.197C5.28 17.387 4.5 15.504 4.5 13.501s.78-3.887 2.197-5.303A7.514 7.514 0 0 1 9 6.623V3.437C4.663 4.728 1.5 8.745 1.5 13.501c0 5.799 4.701 10.5 10.5 10.5s10.5-4.701 10.5-10.5c0-4.756-3.163-8.773-7.5-10.064zM10.5 0h3v12h-3z" />
  </svg>
);
export default SvgSwitch;
