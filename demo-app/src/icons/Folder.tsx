import * as React from "react";
import { SVGProps } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m10.5 3 3 3H24v16.5H0V3z" />
  </svg>
);
export default SvgFolder;
