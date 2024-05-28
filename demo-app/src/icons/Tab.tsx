import * as React from "react";
import { SVGProps } from "react";
const SvgTab = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22.5 0H24v12h-1.5V0zM0 12h1.5v12H0V12zM7.5 16.5H24v3H7.5v3.75L2.25 18l5.25-5.25v3.75zM16.5 7.5H0v-3h16.5V.75L21.75 6l-5.25 5.25z" />
  </svg>
);
export default SvgTab;
