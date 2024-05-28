import * as React from "react";
import { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4.5 0v24l7.5-7.5 7.5 7.5V0z" />
  </svg>
);
export default SvgBookmark;
