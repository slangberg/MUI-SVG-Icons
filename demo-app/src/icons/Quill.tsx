import * as React from "react";
import { SVGProps } from "react";
const SvgQuill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 24C3 15 10.852 0 24 0c-6.164 4.945-9 16.5-13.5 16.5H6L1.5 24H0z" />
  </svg>
);
export default SvgQuill;
