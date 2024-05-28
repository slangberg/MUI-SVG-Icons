import * as React from "react";
import { SVGProps } from "react";
const SvgNpm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 0v24h24V0H0zm19.5 19.5h-3v-12H12v12H4.5v-15h15v15z" />
  </svg>
);
export default SvgNpm;
