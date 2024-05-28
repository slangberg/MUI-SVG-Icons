import * as React from "react";
import { SVGProps } from "react";
const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M16.5 1.5h3v9.75c0 3.728-3.358 6.75-7.5 6.75s-7.5-3.022-7.5-6.75V1.5h3v9.75c0 .941.427 1.845 1.204 2.543C9.569 14.571 10.739 15 12 15s2.432-.429 3.296-1.207c.776-.698 1.204-1.602 1.204-2.543V1.5zm-12 18h15v3h-15z" />
  </svg>
);
export default SvgUnderline;
