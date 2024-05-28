import * as React from "react";
import { SVGProps } from "react";
const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18.75 0h-15A2.257 2.257 0 0 0 1.5 2.25v19.5A2.257 2.257 0 0 0 3.75 24h15A2.257 2.257 0 0 0 21 21.75V2.25A2.257 2.257 0 0 0 18.75 0zm-7.5 23.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM18 21H4.5V3H18v18z" />
  </svg>
);
export default SvgTablet;
