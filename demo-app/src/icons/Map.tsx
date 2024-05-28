import * as React from "react";
import { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m0 4.5 7.5-3v18l-7.5 3zM9 .75l7.5 4.5V22.5L9 18.75zM18 5.25l6-4.5v18l-6 4.5z" />
  </svg>
);
export default SvgMap;
