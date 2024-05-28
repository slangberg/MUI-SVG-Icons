import * as React from "react";
import { SVGProps } from "react";
const SvgArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m0 17.25 6-6L18.75 24 24 18.75 11.25 6l6-6H0v17.25z" />
  </svg>
);
export default SvgArrowUpLeft;
