import * as React from "react";
import { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M17.7 1.5c-2.523 0-4.694 2.052-5.699 4.195C10.995 3.552 8.823 1.5 6.301 1.5a6.303 6.303 0 0 0-6.3 6.301c0 7.075 7.137 8.93 12.001 15.924 4.597-6.951 11.999-9.075 11.999-15.924a6.303 6.303 0 0 0-6.3-6.301z" />
  </svg>
);
export default SvgHeart;
