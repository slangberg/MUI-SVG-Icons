import * as React from "react";
import { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0a7.5 7.5 0 0 0-7.5 7.5C4.5 15 12 24 12 24s7.5-9 7.5-16.5A7.5 7.5 0 0 0 12 0zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
  </svg>
);
export default SvgLocation;
