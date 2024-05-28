import * as React from "react";
import { SVGProps } from "react";
const SvgTrello = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21.75 0H2.25A2.257 2.257 0 0 0 0 2.25v19.5A2.257 2.257 0 0 0 2.25 24h19.5A2.257 2.257 0 0 0 24 21.75V2.25A2.257 2.257 0 0 0 21.75 0zM10.5 18c0 .825-.675 1.5-1.5 1.5H6c-.825 0-1.5-.675-1.5-1.5V6c0-.825.675-1.5 1.5-1.5h3c.825 0 1.5.675 1.5 1.5v12zm9-4.5c0 .825-.675 1.5-1.5 1.5h-3c-.825 0-1.5-.675-1.5-1.5V6c0-.825.675-1.5 1.5-1.5h3c.825 0 1.5.675 1.5 1.5v7.5z" />
  </svg>
);
export default SvgTrello;
