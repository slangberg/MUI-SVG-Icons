import * as React from "react";
import { SVGProps } from "react";
const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 0h6v6H0zm9 1.5h15v3H9zM0 9h6v6H0zm9 1.5h15v3H9zM0 18h6v6H0zm9 1.5h15v3H9z" />
  </svg>
);
export default SvgList;
