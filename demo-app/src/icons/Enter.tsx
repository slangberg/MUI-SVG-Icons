import * as React from "react";
import { SVGProps } from "react";
const SvgEnter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 12H1.5V9H9V6l4.5 4.5L9 15zM24 0v19.5L15 24v-4.5H6v-6h1.5V18H15V4.5l6-3H7.5v6H6V0z" />
  </svg>
);
export default SvgEnter;
