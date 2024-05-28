import * as React from "react";
import { SVGProps } from "react";
const SvgWrench = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M23.506 19.169 12.712 9.917A6.75 6.75 0 0 0 4.79.29l3.9 3.9a1.505 1.505 0 0 1 0 2.121L6.311 8.69a1.505 1.505 0 0 1-2.121 0l-3.9-3.9a6.75 6.75 0 0 0 9.627 7.922l9.252 10.794a1.371 1.371 0 0 0 2.037.078l2.379-2.379c.583-.583.548-1.5-.078-2.037z" />
  </svg>
);
export default SvgWrench;
