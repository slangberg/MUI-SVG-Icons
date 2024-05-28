import * as React from "react";
import { SVGProps } from "react";
const SvgIndentDecrease = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 1.5h24v3H0zM9 6h15v3H9zm0 4.5h15v3H9zM9 15h15v3H9zm-9 4.5h24v3H0zm6-12v9L0 12z" />
  </svg>
);
export default SvgIndentDecrease;
