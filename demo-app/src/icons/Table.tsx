import * as React from "react";
import { SVGProps } from "react";
const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 4.5V21h24V4.5H0zM9 15v-3h6v3H9zm6 1.5v3H9v-3h6zm0-9v3H9v-3h6zm-7.5 0v3h-6v-3h6zm-6 4.5h6v3h-6v-3zm15 0h6v3h-6v-3zm0-1.5v-3h6v3h-6zm-15 6h6v3h-6v-3zm15 3v-3h6v3h-6z" />
  </svg>
);
export default SvgTable;
