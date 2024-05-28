import * as React from "react";
import { SVGProps } from "react";
const SvgPacman = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22.611 4.191A11.974 11.974 0 0 0 13.5 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c3.645 0 6.91-1.626 9.111-4.191L15 12l7.611-7.809zM16.5 2.827a1.673 1.673 0 1 1 0 3.346 1.673 1.673 0 0 1 0-3.346z" />
  </svg>
);
export default SvgPacman;
