import * as React from "react";
import { SVGProps } from "react";
const SvgFloppyDisk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 0H0v24h24V3l-3-3zm-9 3h3v6h-3V3zm9 18H3V3h1.5v7.5H18V3h1.757L21 4.243V21z" />
  </svg>
);
export default SvgFloppyDisk;
