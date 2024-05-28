import * as React from "react";
import { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22.5 0H24v17.25c0 2.071-2.351 3.75-5.25 3.75s-5.25-1.679-5.25-3.75c0-2.071 2.351-3.75 5.25-3.75 1.469 0 2.797.431 3.75 1.126V6l-12 2.667V20.25c0 2.071-2.351 3.75-5.25 3.75S0 22.321 0 20.25c0-2.071 2.35-3.75 5.25-3.75 1.469 0 2.797.431 3.75 1.126V3l13.5-3z" />
  </svg>
);
export default SvgMusic;
