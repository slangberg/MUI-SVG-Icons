import * as React from "react";
import { SVGProps } from "react";
const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22.5 6h-6V4.5c0-.825-.675-1.5-1.5-1.5H9c-.825 0-1.5.675-1.5 1.5V6h-6C.675 6 0 6.675 0 7.5V21c0 .825.675 1.5 1.5 1.5h21c.825 0 1.5-.675 1.5-1.5V7.5c0-.825-.675-1.5-1.5-1.5zM9 4.503l.003-.003h5.995l.003.003V6h-6V4.503zM22.5 12h-3v2.25c0 .413-.337.75-.75.75h-1.5a.752.752 0 0 1-.75-.75V12h-9v2.25c0 .413-.337.75-.75.75h-1.5a.752.752 0 0 1-.75-.75V12h-3v-1.5h21V12z" />
  </svg>
);
export default SvgBriefcase;
