import * as React from "react";
import { SVGProps } from "react";
const SvgFilm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 3v18h24V3H0zm4.5 16.5h-3v-3h3v3zm0-6h-3v-3h3v3zm0-6h-3v-3h3v3zm13.5 12H6v-15h12v15zm4.5 0h-3v-3h3v3zm0-6h-3v-3h3v3zm0-6h-3v-3h3v3zM9 7.5v9l6-4.5z" />
  </svg>
);
export default SvgFilm;
