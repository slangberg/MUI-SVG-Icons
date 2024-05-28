import * as React from "react";
import { SVGProps } from "react";
const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20.25 3 9 14.25 3.75 9 0 12.75l9 9 15-15z" />
  </svg>
);
export default SvgCheckmark;
