import * as React from "react";
import { SVGProps } from "react";
const SvgEnvelop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21.75 3H2.25A2.257 2.257 0 0 0 0 5.25v15a2.257 2.257 0 0 0 2.25 2.25h19.5A2.257 2.257 0 0 0 24 20.25v-15A2.257 2.257 0 0 0 21.75 3zM9.345 12.899 3 17.842V6.085l6.345 6.814zM4.134 6h15.732L12 11.906 4.134 6zm5.459 7.165L12 15.75l2.407-2.585 4.935 6.335H4.658l4.935-6.335zm5.062-.266L21 6.085v11.757l-6.345-4.943z" />
  </svg>
);
export default SvgEnvelop;
