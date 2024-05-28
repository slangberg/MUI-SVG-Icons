import * as React from "react";
import { SVGProps } from "react";
const SvgBookmarks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6 3v21l7.5-7.5L21 24V3zm12-3H3v21l1.5-1.5v-18H18z" />
  </svg>
);
export default SvgBookmarks;
