import * as React from "react";
import { SVGProps } from "react";
const SvgRoad = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M16.5 24H24L18 0h-4.5l.75 6h-4.5l.75-6H6L0 24h7.5l.75-6h7.5l.75 6zm-7.875-9 .75-6h5.25l.75 6h-6.75z" />
  </svg>
);
export default SvgRoad;
