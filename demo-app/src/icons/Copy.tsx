import * as React from "react";
import { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15 6V0H4.5L0 4.5V18h9v6h15V6h-9zM4.5 2.121V4.5H2.121L4.5 2.121zM1.5 16.5V6H6V1.5h7.5V6L9 10.5v6H1.5zm12-8.379V10.5h-2.379L13.5 8.121zm9 14.379h-12V12H15V7.5h7.5v15z" />
  </svg>
);
export default SvgCopy;
