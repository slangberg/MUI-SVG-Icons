import * as React from "react";
import { SVGProps } from "react";
const SvgCircleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm21.75 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75z" />
    <path d="m16.564 15.686 2.121-2.121-6.686-6.686-6.686 6.686 2.121 2.121 4.564-4.564z" />
  </svg>
);
export default SvgCircleUp;
