import * as React from "react";
import { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M1.5 4.5h21V9h-21zm0 6h21V15h-21zm0 6h21V21h-21z" />
  </svg>
);
export default SvgMenu;
