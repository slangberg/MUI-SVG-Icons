import * as React from "react";
import { SVGProps } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20.25 0a3.75 3.75 0 0 1 3 6l-1.5 1.5-5.25-5.25L18 .75A3.733 3.733 0 0 1 20.25 0zM1.5 17.25 0 24l6.75-1.5L20.625 8.625l-5.25-5.25L1.5 17.25zm15.271-8.729-10.5 10.5-1.293-1.293 10.5-10.5 1.293 1.293z" />
  </svg>
);
export default SvgPencil;
