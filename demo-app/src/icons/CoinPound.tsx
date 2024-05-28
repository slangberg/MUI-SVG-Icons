import * as React from "react";
import { SVGProps } from "react";
const SvgCoinPound = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M11.25 1.5C5.037 1.5 0 6.537 0 12.75S5.037 24 11.25 24 22.5 18.963 22.5 12.75 17.463 1.5 11.25 1.5zm0 20.25c-4.971 0-9-4.029-9-9s4.029-9 9-9a9 9 0 0 1 0 18z" />
    <path d="M14.25 16.5H9v-3h2.25a.75.75 0 0 0 0-1.5H9v-.75a2.252 2.252 0 0 1 4.2-1.124.75.75 0 1 0 1.299-.751A3.764 3.764 0 0 0 11.251 7.5a3.754 3.754 0 0 0-3.75 3.75V12h-.75a.75.75 0 0 0 0 1.5h.75V18h6.75a.75.75 0 0 0 0-1.5z" />
  </svg>
);
export default SvgCoinPound;
