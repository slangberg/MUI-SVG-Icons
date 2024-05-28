import * as React from "react";
import { SVGProps } from "react";
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 1.5H1.5C.675 1.5 0 2.175 0 3v7.5c0 .825.675 1.5 1.5 1.5H9c.825 0 1.5-.675 1.5-1.5V3c0-.825-.675-1.5-1.5-1.5zm0 6H1.5V6H9v1.5zm12-6h-7.5c-.825 0-1.5.675-1.5 1.5v19.5c0 .825.675 1.5 1.5 1.5H21c.825 0 1.5-.675 1.5-1.5V3c0-.825-.675-1.5-1.5-1.5zM21 15h-7.5v-1.5H21V15zm0-4.5h-7.5V9H21v1.5zm-12 3H1.5c-.825 0-1.5.675-1.5 1.5v7.5c0 .825.675 1.5 1.5 1.5H9c.825 0 1.5-.675 1.5-1.5V15c0-.825-.675-1.5-1.5-1.5zm0 6H6v3H4.5v-3h-3V18h3v-3H6v3h3v1.5z" />
  </svg>
);
export default SvgCalculator;
