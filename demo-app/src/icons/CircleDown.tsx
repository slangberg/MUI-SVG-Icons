import * as React from "react";
import { SVGProps } from "react";
const SvgCircleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12z" />
    <path d="m7.436 8.314-2.121 2.121 6.686 6.686 6.686-6.686-2.121-2.121-4.564 4.564z" />
  </svg>
);
export default SvgCircleDown;
