import * as React from "react";
import { SVGProps } from "react";
const SvgClock2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.439 17.561L10.5 12.622V6.001h3v5.379l4.061 4.061-2.121 2.121z" />
  </svg>
);
export default SvgClock2;
