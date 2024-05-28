import * as React from "react";
import { SVGProps } from "react";
const SvgBoxRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19.5 1.5h-15L0 6v15.75c0 .414.336.75.75.75h22.5a.75.75 0 0 0 .75-.75V6l-4.5-4.5zM15 15v4.5H9V15H4.5L12 9l7.5 6H15zM3.621 4.5l1.5-1.5h13.757l1.5 1.5H3.621z" />
  </svg>
);
export default SvgBoxRemove;
