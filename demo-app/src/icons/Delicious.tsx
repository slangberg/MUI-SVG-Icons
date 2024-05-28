import * as React from "react";
import { SVGProps } from "react";
const SvgDelicious = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 0v24h24V0H0zm12 22.5V12H1.5V1.5H12V12h10.5v10.5H12z" />
  </svg>
);
export default SvgDelicious;
