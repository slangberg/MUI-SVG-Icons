import * as React from "react";
import { SVGProps } from "react";
const SvgBlogger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22.448 9h-1.345c-.824 0-1.547-.697-1.603-1.5 0-4.281-3.451-7.5-7.762-7.5H7.805C3.497 0 .004 3.469.001 7.75v8.503C.001 20.534 3.497 24 7.805 24h8.4C20.516 24 24 20.534 24 16.253V10.76C24 9.904 23.31 9 22.448 9zM7.5 6H12c.825 0 1.5.675 1.5 1.5S12.825 9 12 9H7.5C6.675 9 6 8.325 6 7.5S6.675 6 7.5 6zm9 12h-9c-.825 0-1.5-.675-1.5-1.5S6.675 15 7.5 15h9c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5z" />
  </svg>
);
export default SvgBlogger;
