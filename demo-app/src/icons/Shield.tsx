import * as React from "react";
import { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22.5 0 12 3 1.5 0s-.105 1.212 0 3L12 6.283 22.5 3c.105-1.788 0-3 0-3zM1.692 4.573C2.254 10.449 4.352 20.328 12 24c7.648-3.672 9.746-13.552 10.308-19.427L12 8.449 1.692 4.573z" />
  </svg>
);
export default SvgShield;
