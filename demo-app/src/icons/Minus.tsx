import * as React from "react";
import { SVGProps } from "react";
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 9.75v4.5c0 .414.336.75.75.75h22.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H.75a.75.75 0 0 0-.75.75z" />
  </svg>
);
export default SvgMinus;
