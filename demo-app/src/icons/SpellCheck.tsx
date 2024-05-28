import * as React from "react";
import { SVGProps } from "react";
const SvgSpellCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 6h3v4.5h1.5v-9C7.5.675 6.825 0 6 0H3c-.825 0-1.5.675-1.5 1.5v9H3V6zm0-4.5h3v3H3v-3zm19.5 0V0H18c-.825 0-1.5.675-1.5 1.5V9c0 .825.675 1.5 1.5 1.5h4.5V9H18V1.5h4.5zM15 3.75V1.5c0-.825-.675-1.5-1.5-1.5H9v10.5h4.5c.825 0 1.5-.675 1.5-1.5V6.75c0-.825-.206-1.5-1.031-1.5.825 0 1.031-.675 1.031-1.5zM13.5 9h-3V6h3v3zm0-4.5h-3v-3h3v3zm6 9L9.75 24 4.5 17.25l1.922-1.641 3.328 3.469L18 12z" />
  </svg>
);
export default SvgSpellCheck;
