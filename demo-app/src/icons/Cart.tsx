import * as React from "react";
import { SVGProps } from "react";
const SvgCart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 21.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zM24 21.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zM24 12V3H6a1.5 1.5 0 0 0-1.5-1.5H0V3h3l1.127 9.658A3 3 0 0 0 6 18h18v-1.5H6A1.5 1.5 0 0 1 4.5 15v-.015L24 12z" />
  </svg>
);
export default SvgCart;
