import * as React from "react";
import { SVGProps } from "react";
const SvgTextWidth = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6 21v3l-4.5-3.75L6 16.5v3h12v-3l4.5 3.75L18 24v-3zM19.5 1.5v6l-1.5-3h-4.5V15h3v1.5h-9V15h3V4.5H6l-1.5 3v-6z" />
  </svg>
);
export default SvgTextWidth;
