import * as React from "react";
import { SVGProps } from "react";
const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 16.5v-12c0-.825-.675-1.5-1.5-1.5h-15C3.675 3 3 3.675 3 4.5v12H0V21h24v-4.5h-3zm-6 3H9V18h6v1.5zm4.5-3h-15V4.503l.003-.003h14.995l.003.003V16.5z" />
  </svg>
);
export default SvgLaptop;
