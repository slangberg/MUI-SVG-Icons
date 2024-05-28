import * as React from "react";
import { SVGProps } from "react";
const SvgMan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M13.5 2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zM13.5 6H9a1.5 1.5 0 0 0-1.5 1.5V15H9v9h1.875v-9h.75v9H13.5v-9H15V7.5A1.5 1.5 0 0 0 13.5 6z" />
  </svg>
);
export default SvgMan;
