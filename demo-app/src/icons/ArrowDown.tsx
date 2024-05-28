import * as React from "react";
import { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 23.25 23.25 12H16.5V0h-9v12H.75z" />
  </svg>
);
export default SvgArrowDown;
