import * as React from "react";
import { SVGProps } from "react";
const SvgEllo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.327 13.819a7.567 7.567 0 0 1-14.655-.001A1.062 1.062 0 0 1 5.7 12.492c.483 0 .905.327 1.026.796.621 2.408 2.79 4.09 5.274 4.09s4.652-1.682 5.273-4.09a1.06 1.06 0 1 1 2.054.53z" />
  </svg>
);
export default SvgEllo;
