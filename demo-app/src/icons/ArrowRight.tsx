import * as React from "react";
import { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M23.25 12 12 .75V7.5H0v9h12v6.75z" />
  </svg>
);
export default SvgArrowRight;
