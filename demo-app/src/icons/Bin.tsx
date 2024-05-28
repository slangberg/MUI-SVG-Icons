import * as React from "react";
import { SVGProps } from "react";
const SvgBin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 7.5v15c0 .825.675 1.5 1.5 1.5H18c.825 0 1.5-.675 1.5-1.5v-15H3zM7.5 21H6V10.5h1.5V21zm3 0H9V10.5h1.5V21zm3 0H12V10.5h1.5V21zm3 0H15V10.5h1.5V21zM19.875 3H15V1.125C15 .506 14.494 0 13.875 0h-5.25C8.006 0 7.5.506 7.5 1.125V3H2.625C2.006 3 1.5 3.506 1.5 4.125V6H21V4.125C21 3.506 20.494 3 19.875 3zM13.5 3H9V1.519h4.5V3z" />
  </svg>
);
export default SvgBin;
