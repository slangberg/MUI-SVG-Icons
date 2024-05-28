import * as React from "react";
import { SVGProps } from "react";
const SvgCircleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
    <path d="m8.314 16.564 2.121 2.121 6.686-6.686-6.686-6.686-2.121 2.121 4.564 4.564z" />
  </svg>
);
export default SvgCircleRight;
