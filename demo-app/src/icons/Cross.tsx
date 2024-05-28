import * as React from "react";
import { SVGProps } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M23.781 19.281 16.5 12l7.281-7.281a.748.748 0 0 0-.001-1.061L20.341.219A.751.751 0 0 0 19.28.218l-7.281 7.281L4.718.218a.748.748 0 0 0-1.061.001L.218 3.658a.751.751 0 0 0-.001 1.061L7.498 12 .217 19.281a.748.748 0 0 0 .001 1.061l3.439 3.439a.751.751 0 0 0 1.061.001l7.281-7.281 7.281 7.281a.748.748 0 0 0 1.061-.001l3.439-3.439a.751.751 0 0 0 .001-1.061z" />
  </svg>
);
export default SvgCross;
