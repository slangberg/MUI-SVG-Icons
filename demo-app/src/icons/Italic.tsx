import * as React from "react";
import { SVGProps } from "react";
const SvgItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 1.5V3h-3l-7.5 18h3v1.5H3V21h3l7.5-18h-3V1.5z" />
  </svg>
);
export default SvgItalic;
