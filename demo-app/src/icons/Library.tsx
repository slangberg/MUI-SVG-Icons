import * as React from "react";
import { SVGProps } from "react";
const SvgLibrary = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={24} {...props}>
    <path d="M24 22.5V21h-1.5v-9H24v-1.5h-4.5V12H21v9h-4.5v-9H18v-1.5h-4.5V12H15v9h-4.5v-9H12v-1.5H7.5V12H9v9H4.5v-9H6v-1.5H1.5V12H3v9H1.5v1.5H0V24h25.5v-1.5H24zM12 0h1.5l12 7.5V9H0V7.5L12 0z" />
  </svg>
);
export default SvgLibrary;
