import * as React from "react";
import { SVGProps } from "react";
const SvgFirst = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 21V3h3v8.25l7.5-7.5v7.5l7.5-7.5v16.5l-7.5-7.5v7.5L6 12.75V21z" />
  </svg>
);
export default SvgFirst;
