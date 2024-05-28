import * as React from "react";
import { SVGProps } from "react";
const SvgOpt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21.75 19.5h-6a.75.75 0 0 1-.685-.445L9.263 6H2.25a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 .685.445L16.237 18h5.513a.75.75 0 0 1 0 1.5zM21.75 6h-7.5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5z" />
  </svg>
);
export default SvgOpt;
