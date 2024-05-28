import * as React from "react";
import { SVGProps } from "react";
const SvgEnlarge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M24 0h-9.75L18 3.75l-4.5 4.5 2.25 2.25 4.5-4.5L24 9.75zM24 24v-9.75L20.25 18l-4.5-4.5-2.25 2.25 4.5 4.5L14.25 24zM0 24h9.75L6 20.25l4.5-4.5-2.25-2.25-4.5 4.5L0 14.25zM0 0v9.75L3.75 6l4.5 4.5 2.25-2.25L6 3.75 9.75 0z" />
  </svg>
);
export default SvgEnlarge;
