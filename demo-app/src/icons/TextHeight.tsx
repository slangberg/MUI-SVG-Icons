import * as React from "react";
import { SVGProps } from "react";
const SvgTextHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 18h3l-3.75 4.5L16.5 18h3V6h-3l3.75-4.5L24 6h-3zM15 1.5v6l-1.5-3H9V21h3v1.5H3V21h3V4.5H1.5L0 7.5v-6z" />
  </svg>
);
export default SvgTextHeight;
