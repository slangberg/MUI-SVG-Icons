import * as React from "react";
import { SVGProps } from "react";
const SvgShift = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15.75 21h-7.5a.75.75 0 0 1-.75-.75V12h-3a.75.75 0 0 1-.53-1.28l7.5-7.5a.75.75 0 0 1 1.061 0l7.5 7.5a.749.749 0 0 1-.53 1.28h-3v8.25a.75.75 0 0 1-.75.75zM9 19.5h6v-8.25a.75.75 0 0 1 .75-.75h1.939L12 4.811 6.311 10.5H8.25a.75.75 0 0 1 .75.75v8.25z" />
  </svg>
);
export default SvgShift;
