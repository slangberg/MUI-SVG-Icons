import * as React from "react";
import { SVGProps } from "react";
const SvgAirplane = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m18 14.999-4.285-4.285L24 3l-3-3L8.144 5.143 4.096 1.095C2.929-.072 1.3-.351.475.474s-.545 2.455.621 3.621l4.047 4.047-5.144 12.857 3 3 7.715-10.286 4.285 4.285v6h3l1.5-4.5 4.5-1.5v-3h-6z" />
  </svg>
);
export default SvgAirplane;
