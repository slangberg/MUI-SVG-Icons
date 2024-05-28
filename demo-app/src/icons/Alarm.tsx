import * as React from "react";
import { SVGProps } from "react";
const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 3C6.201 3 1.5 7.701 1.5 13.5S6.201 24 12 24s10.5-4.701 10.5-10.5S17.799 3 12 3zm0 18.938a8.438 8.438 0 1 1 0-16.876 8.438 8.438 0 0 1 0 16.876zm9.909-15.207a4.5 4.5 0 0 0-7.47-4.983 12.01 12.01 0 0 1 7.47 4.982zM9.561 1.748a4.5 4.5 0 0 0-7.47 4.983 12.007 12.007 0 0 1 7.47-4.982z" />
    <path d="M12 13.5v-6h-1.5V15h6v-1.5z" />
  </svg>
);
export default SvgAlarm;
