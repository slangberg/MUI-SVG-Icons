import * as React from "react";
import { SVGProps } from "react";
const SvgShrink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M13.5 10.5h9.75L19.5 6.75l4.5-4.5L21.75 0l-4.5 4.5L13.5.75zM13.5 13.5v9.75l3.75-3.75 4.5 4.5L24 21.75l-4.5-4.5 3.75-3.75zM10.5 13.5H.75l3.75 3.75-4.5 4.5L2.25 24l4.5-4.5 3.75 3.75zM10.5 10.5V.75L6.75 4.5 2.25 0 0 2.25l4.5 4.5L.75 10.5z" />
  </svg>
);
export default SvgShrink;
