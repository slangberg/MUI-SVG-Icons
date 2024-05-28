import * as React from "react";
import { SVGProps } from "react";
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m6.75 0 6 6L0 18.75 5.25 24 18 11.25l6 6V0H6.75z" />
  </svg>
);
export default SvgArrowUpRight;
