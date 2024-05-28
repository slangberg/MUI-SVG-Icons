import * as React from "react";
import { SVGProps } from "react";
const SvgDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 1.5v15h24v-15H0zM22.5 15h-21V3h21v12zm-6.75 3h-7.5l-.75 3L6 22.5h12L16.5 21z" />
  </svg>
);
export default SvgDisplay;
