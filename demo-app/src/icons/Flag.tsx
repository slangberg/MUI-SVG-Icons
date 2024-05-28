import * as React from "react";
import { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 0h3v24H0V0zM19.5 15.07c1.937 0 3.623-.468 4.5-1.16v-12c-.877.692-2.563 1.16-4.5 1.16s-3.623-.468-4.5-1.16v12c.877.692 2.563 1.16 4.5 1.16zM14.25.762C13.151.295 11.543 0 9.75 0 7.491 0 5.523.468 4.5 1.16v12C5.523 12.468 7.491 12 9.75 12c1.793 0 3.401.295 4.5.762v-12z" />
  </svg>
);
export default SvgFlag;
