import * as React from "react";
import { SVGProps } from "react";
const SvgPilcrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 0h12v3h-3v21h-3V3h-3v21H9V12A6 6 0 1 1 9 0z" />
  </svg>
);
export default SvgPilcrow;
