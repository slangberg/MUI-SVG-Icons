import * as React from "react";
import { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M.75 12 12 23.25V16.5h12v-9H12V.75z" />
  </svg>
);
export default SvgArrowLeft;
