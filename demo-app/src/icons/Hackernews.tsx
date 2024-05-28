import * as React from "react";
import { SVGProps } from "react";
const SvgHackernews = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 0v24h24V0H0zm12.75 13.688v5.063h-1.5v-5.063L7.148 6H8.85L12 11.906 15.15 6h1.702l-4.102 7.688z" />
  </svg>
);
export default SvgHackernews;
