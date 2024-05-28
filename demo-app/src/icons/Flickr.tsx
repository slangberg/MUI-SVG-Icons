import * as React from "react";
import { SVGProps } from "react";
const SvgFlickr = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0zm13.5 0a5.25 5.25 0 1 1 10.501.001A5.25 5.25 0 0 1 13.5 12.75z" />
  </svg>
);
export default SvgFlickr;
