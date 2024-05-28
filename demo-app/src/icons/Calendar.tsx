import * as React from "react";
import { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M7.5 9h3v3h-3zM12 9h3v3h-3zm4.5 0h3v3h-3zM3 18h3v3H3zm4.5 0h3v3h-3zm4.5 0h3v3h-3zm-4.5-4.5h3v3h-3zm4.5 0h3v3h-3zm4.5 0h3v3h-3zM3 13.5h3v3H3zM19.5 0v1.5h-3V0H6v1.5H3V0H0v24h22.5V0h-3zM21 22.5H1.5V6H21v16.5z" />
  </svg>
);
export default SvgCalendar;
