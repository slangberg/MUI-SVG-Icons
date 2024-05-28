import * as React from "react";
import { SVGProps } from "react";
const SvgRtl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6 0a6 6 0 1 0 0 12v12h3V3h3v21h3V3h3V0H6zm18 4.5-6 6 6 6z" />
  </svg>
);
export default SvgRtl;
