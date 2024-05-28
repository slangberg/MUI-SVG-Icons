import * as React from "react";
import { SVGProps } from "react";
const SvgExit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 15v-3h-7.5V9H18V6l4.5 4.5zm-1.5-1.5v6H9V24l-9-4.5V0h16.5v7.5H15v-6H3l6 3V18h6v-4.5z" />
  </svg>
);
export default SvgExit;
