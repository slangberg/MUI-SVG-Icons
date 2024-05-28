import * as React from "react";
import { SVGProps } from "react";
const SvgDiamonds = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0 4.5 12 12 24l7.5-12z" />
  </svg>
);
export default SvgDiamonds;
