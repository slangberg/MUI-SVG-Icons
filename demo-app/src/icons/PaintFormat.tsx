import * as React from "react";
import { SVGProps } from "react";
const SvgPaintFormat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M24 13.5v-9h-4.5V3c0-.825-.675-1.5-1.5-1.5H1.5C.675 1.5 0 2.175 0 3v4.5C0 8.325.675 9 1.5 9H18c.825 0 1.5-.675 1.5-1.5V6h3v6H9v3h-.75a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75h-.75v-1.5H24zm-6-9H1.5V3H18v1.5z" />
  </svg>
);
export default SvgPaintFormat;
