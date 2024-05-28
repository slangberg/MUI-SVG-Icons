import * as React from "react";
import { SVGProps } from "react";
const SvgCoinDollar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M11.25 1.5C5.037 1.5 0 6.537 0 12.75S5.037 24 11.25 24 22.5 18.963 22.5 12.75 17.463 1.5 11.25 1.5zm0 20.25c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9-4.029 9-9 9zM12 12V9h3V7.5h-3V6h-1.5v1.5h-3v6h3v3h-3V18h3v1.5H12V18h3v-6h-3zm-1.5 0H9V9h1.5v3zm3 4.5H12v-3h1.5v3z" />
  </svg>
);
export default SvgCoinDollar;
