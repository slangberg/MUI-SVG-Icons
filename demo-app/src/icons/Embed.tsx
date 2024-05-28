import * as React from "react";
import { SVGProps } from "react";
const SvgEmbed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m13.5 17.25 2.25 2.25 7.5-7.5-7.5-7.5-2.25 2.25L18.75 12zM10.5 6.75 8.25 4.5.75 12l7.5 7.5 2.25-2.25L5.25 12z" />
  </svg>
);
export default SvgEmbed;
