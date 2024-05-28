import * as React from "react";
import { SVGProps } from "react";
const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={27} height={24} {...props}>
    <path d="M25.5 3h-24C.675 3 0 3.675 0 4.5v15c0 .825.675 1.5 1.5 1.5h24c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5zM15 6h3v3h-3V6zm4.5 4.5v3h-3v-3h3zm-9-4.5h3v3h-3V6zm4.5 4.5v3h-3v-3h3zM6 6h3v3H6V6zm4.5 4.5v3h-3v-3h3zM3 6h1.5v3H3V6zm0 4.5h3v3H3v-3zM4.5 18H3v-3h1.5v3zM18 18H6v-3h12v3zm6 0h-4.5v-3H24v3zm0-4.5h-3v-3h3v3zM24 9h-4.5V6H24v3z" />
  </svg>
);
export default SvgKeyboard;
