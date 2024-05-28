import * as React from "react";
import { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 3v19.5H5.25a2.25 2.25 0 1 1 0-4.5H19.5V0h-15c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h18V3H21z" />
    <path d="M5.251 19.5H5.25a.75.75 0 0 0 0 1.5h14.248v-1.5H5.251z" />
  </svg>
);
export default SvgBook;
