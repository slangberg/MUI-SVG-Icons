import * as React from "react";
import { SVGProps } from "react";
const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M17.25 0H6.75A2.257 2.257 0 0 0 4.5 2.25v19.5A2.257 2.257 0 0 0 6.75 24h10.5a2.257 2.257 0 0 0 2.25-2.25V2.25A2.257 2.257 0 0 0 17.25 0zM9 1.125h6v.75H9v-.75zM12 22.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 22.5zm6-4.5H6V3h12v15z" />
  </svg>
);
export default SvgMobile;
