import * as React from "react";
import { SVGProps } from "react";
const SvgParagraphCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 1.5h24v3H0zM4.5 6h15v3h-15zm0 9h15v3h-15zM0 10.5h24v3H0zm0 9h24v3H0z" />
  </svg>
);
export default SvgParagraphCenter;
