import * as React from "react";
import { SVGProps } from "react";
const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m24 7.5-12-6-12 6 12 6 12-6zM12 3.491 20.017 7.5 12 11.509 3.983 7.5 12 3.491zm9.596 7.307L24 12l-12 6-12-6 2.404-1.202L12 15.596zm0 4.5L24 16.5l-12 6-12-6 2.404-1.202L12 20.096z" />
  </svg>
);
export default SvgStack;
