import * as React from "react";
import { SVGProps } from "react";
const SvgFontSize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M1.5 12h9v3h-3v9h-3v-9h-3zm21-6h-5.9v18h-3.199V6h-5.9V3h15z" />
  </svg>
);
export default SvgFontSize;
