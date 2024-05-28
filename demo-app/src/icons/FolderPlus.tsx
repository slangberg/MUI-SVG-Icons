import * as React from "react";
import { SVGProps } from "react";
const SvgFolderPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m13.5 6-3-3H0v19.5h24V6H13.5zm3 10.5h-3v3h-3v-3h-3v-3h3v-3h3v3h3v3z" />
  </svg>
);
export default SvgFolderPlus;
