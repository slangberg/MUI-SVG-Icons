import * as React from "react";
import { SVGProps } from "react";
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M10.5 7.125c0-.619.506-1.125 1.125-1.125h.75c.619 0 1.125.506 1.125 1.125v.75C13.5 8.494 12.994 9 12.375 9h-.75A1.128 1.128 0 0 1 10.5 7.875v-.75zM15 18H9v-1.5h1.5V12H9v-1.5h4.5v6H15z" />
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
  </svg>
);
export default SvgInfo;
