import * as React from "react";
import { SVGProps } from "react";
const SvgDrive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4.5 21h15a4.5 4.5 0 0 0 4.5-4.5H0A4.5 4.5 0 0 0 4.5 21zm15-3H21v1.5h-1.5V18zm3-15h-21L0 15h24z" />
  </svg>
);
export default SvgDrive;
