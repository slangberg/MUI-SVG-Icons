import * as React from "react";
import { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 .75.75 12H7.5v12h9V12h6.75z" />
  </svg>
);
export default SvgArrowUp;
