import * as React from "react";
import { SVGProps } from "react";
const SvgRocket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M16.5 1.5 9 9H4.5L0 15s4.768-1.328 7.548-.705L0 24l9.888-7.691C11.267 19.465 9 24 9 24l6-4.5V15l7.5-7.5L24 0l-7.5 1.5z" />
  </svg>
);
export default SvgRocket;
