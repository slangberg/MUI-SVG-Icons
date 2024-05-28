import * as React from "react";
import { SVGProps } from "react";
const SvgBackward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-21.75c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm4.5 13.5L11.25 12l5.25-3.75zm-6 0L5.25 12l5.25-3.75z" />
  </svg>
);
export default SvgBackward;
