import * as React from "react";
import { SVGProps } from "react";
const SvgTwitch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M2.25 0 0 3.75V21h6v3h3l3-3h3.75l6.75-6.75V0H2.25zM19.5 12.75l-3.75 3.75H12l-3 3v-3H4.5V3h15v9.75z" />
    <path d="M14.25 6h2.25v6h-2.25V6zM9.75 6H12v6H9.75V6z" />
  </svg>
);
export default SvgTwitch;
