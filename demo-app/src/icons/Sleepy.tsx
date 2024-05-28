import * as React from "react";
import { SVGProps } from "react";
const SvgSleepy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-21.75c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z" />
    <path d="M15 15.75c0 2.071-1.343 3.75-3 3.75s-3-1.679-3-3.75C9 13.679 10.343 12 12 12s3 1.679 3 3.75zM9.75 7.969a.744.744 0 0 1-.53-.22c-.453-.453-1.486-.453-1.939 0A.75.75 0 1 1 6.22 6.688c1.044-1.044 3.017-1.044 4.061 0a.75.75 0 0 1-.53 1.281zM17.25 7.969a.744.744 0 0 1-.53-.22c-.453-.453-1.486-.453-1.939 0a.75.75 0 1 1-1.061-1.061c1.044-1.044 3.017-1.044 4.061 0a.75.75 0 0 1-.53 1.281z" />
  </svg>
);
export default SvgSleepy;