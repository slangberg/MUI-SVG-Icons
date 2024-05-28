import * as React from "react";
import { SVGProps } from "react";
const SvgPower = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 0 0 12h9L3 24 24 9H12l9-9z" />
  </svg>
);
export default SvgPower;
