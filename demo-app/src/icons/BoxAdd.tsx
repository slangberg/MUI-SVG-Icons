import * as React from "react";
import { SVGProps } from "react";
const SvgBoxAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19.5 1.5h-15L0 6v15.75c0 .414.336.75.75.75h22.5a.75.75 0 0 0 .75-.75V6l-4.5-4.5zm-7.5 18-7.5-6H9V9h6v4.5h4.5l-7.5 6zm-8.379-15 1.5-1.5h13.757l1.5 1.5H3.621z" />
  </svg>
);
export default SvgBoxAdd;
