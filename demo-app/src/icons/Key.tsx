import * as React from "react";
import { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M16.5 0a7.5 7.5 0 0 0-7.374 8.874L0 18v4.5A1.5 1.5 0 0 0 1.5 24H3v-1.5h3v-3h3v-3h3l1.946-1.946A7.5 7.5 0 1 0 16.5 0zm2.247 7.503a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z" />
  </svg>
);
export default SvgKey;
