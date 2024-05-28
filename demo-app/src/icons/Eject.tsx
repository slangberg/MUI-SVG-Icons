import * as React from "react";
import { SVGProps } from "react";
const SvgEject = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 18h24v3H0zM12 3l12 12H0z" />
  </svg>
);
export default SvgEject;
