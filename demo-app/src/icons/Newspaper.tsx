import * as React from "react";
import { SVGProps } from "react";
const SvgNewspaper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 6V3H0v16.5A1.5 1.5 0 0 0 1.5 21h20.25A2.25 2.25 0 0 0 24 18.75V6h-3zm-1.5 13.5h-18v-15h18v15zM3 7.5h15V9H3zm9 3h6V12h-6zm0 3h6V15h-6zm0 3h4.5V18H12zm-9-6h7.5V18H3z" />
  </svg>
);
export default SvgNewspaper;
