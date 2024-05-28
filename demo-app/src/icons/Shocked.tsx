import * as React from "react";
import { SVGProps } from "react";
const SvgShocked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-21.75c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zM9 16.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm6-8.25C15 7.007 15.672 6 16.5 6S18 7.007 18 8.25s-.672 2.25-1.5 2.25S15 9.493 15 8.25zm-9 0C6 7.007 6.672 6 7.5 6S9 7.007 9 8.25s-.672 2.25-1.5 2.25S6 9.493 6 8.25z" />
  </svg>
);
export default SvgShocked;
