import * as React from "react";
import { SVGProps } from "react";
const SvgAccessibility = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9.75 2.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0z" />
    <path d="m15 7.5 7.725-3.332-.557-1.393L12.75 6h-1.5L1.832 2.775l-.557 1.393L9 7.5v6l-3.077 9.951 1.403.532 4.353-9.733h.643l4.353 9.733 1.403-.532-3.077-9.951z" />
  </svg>
);
export default SvgAccessibility;
