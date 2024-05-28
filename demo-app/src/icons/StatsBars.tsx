import * as React from "react";
import { SVGProps } from "react";
const SvgStatsBars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 19.5h24v3H0zm3-6h3V18H3zm4.5-6h3V18h-3zM12 12h3v6h-3zm4.5-9h3v15h-3z" />
  </svg>
);
export default SvgStatsBars;
