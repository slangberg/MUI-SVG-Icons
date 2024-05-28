import * as React from "react";
import { SVGProps } from "react";
const SvgPagebreak = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6 9V0h18v9h-1.5V1.5h-15V9zm18 4.5V24H6V13.5h1.5v9h15v-9zm-12-3h3V12h-3zm-4.5 0h3V12h-3zm9 0h3V12h-3zm4.5 0h3V12h-3zM0 6.75l4.5 4.5-4.5 4.5z" />
  </svg>
);
export default SvgPagebreak;
