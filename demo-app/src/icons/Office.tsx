import * as React from "react";
import { SVGProps } from "react";
const SvgOffice = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 24h12V0H0v24zM7.5 3h3v3h-3V3zm0 6h3v3h-3V9zm0 6h3v3h-3v-3zm-6-12h3v3h-3V3zm0 6h3v3h-3V9zm0 6h3v3h-3v-3zm12-7.5H24V9H13.5zm0 16.5h3v-6H21v6h3V10.5H13.5z" />
  </svg>
);
export default SvgOffice;
