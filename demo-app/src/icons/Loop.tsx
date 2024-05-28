import * as React from "react";
import { SVGProps } from "react";
const SvgLoop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 7.5h15V12l6-6-6-6v4.5H0v9h3zm18 9H6V12l-6 6 6 6v-4.5h18v-9h-3z" />
  </svg>
);
export default SvgLoop;
