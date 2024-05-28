import * as React from "react";
import { SVGProps } from "react";
const SvgCircleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-21.75c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z" />
    <path d="m15.686 7.436-2.121-2.121-6.686 6.686 6.686 6.686 2.121-2.121-4.564-4.564z" />
  </svg>
);
export default SvgCircleLeft;
