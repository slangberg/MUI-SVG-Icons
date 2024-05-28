import * as React from "react";
import { SVGProps } from "react";
const SvgNeutral = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-21.75c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zM6 7.5a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 6 7.5zm9 0a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 15 7.5zm-6 9h6V18H9v-1.5z" />
  </svg>
);
export default SvgNeutral;