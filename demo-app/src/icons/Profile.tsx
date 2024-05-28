import * as React from "react";
import { SVGProps } from "react";
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20.25 0h-18A2.257 2.257 0 0 0 0 2.25v19.5A2.257 2.257 0 0 0 2.25 24h18a2.257 2.257 0 0 0 2.25-2.25V2.25A2.257 2.257 0 0 0 20.25 0zm-.75 21H3V3h16.5v18zM6 13.5h10.5V15H6zm0 3h10.5V18H6zm1.5-9.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0zM11.25 9h-3C7.012 9 6 9.675 6 10.5V12h7.5v-1.5c0-.825-1.013-1.5-2.25-1.5z" />
  </svg>
);
export default SvgProfile;
