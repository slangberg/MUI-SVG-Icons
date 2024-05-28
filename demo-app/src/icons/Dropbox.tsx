import * as React from "react";
import { SVGProps } from "react";
const SvgDropbox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M17.25.75 12 5.25l6.75 4.5L24 5.25zM12 5.25 6.75.75 0 5.25l5.25 4.5zM18.75 9.75l5.25 4.5L17.25 18 12 13.5zM12 13.5 5.25 9.75 0 14.25 6.75 18z" />
    <path d="M17.066 19.818 12 15.476l-5.066 4.342-3.184-1.769v2.201L12 24l8.25-3.75v-2.201z" />
  </svg>
);
export default SvgDropbox;
