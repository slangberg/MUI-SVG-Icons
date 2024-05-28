import * as React from "react";
import { SVGProps } from "react";
const SvgImages = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={27} height={24} {...props}>
    <path d="M25.5 3H24V1.5c0-.825-.675-1.5-1.5-1.5h-21C.675 0 0 .675 0 1.5v18c0 .825.675 1.5 1.5 1.5H3v1.5c0 .825.675 1.5 1.5 1.5h21c.825 0 1.5-.675 1.5-1.5v-18c0-.825-.675-1.5-1.5-1.5zM3 4.5v15H1.503l-.003-.003V1.502l.003-.003h20.995l.003.003v1.497h-18c-.825 0-1.5.675-1.5 1.5zm22.5 17.997-.003.003H4.502l-.003-.003V4.502l.003-.003h20.995l.003.003v17.995z" />
    <path d="M22.5 8.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zM24 21H6v-3l5.25-9 6 7.5h1.5L24 12z" />
  </svg>
);
export default SvgImages;
