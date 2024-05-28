import * as React from "react";
import { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M13.875 10.5H13.5V6c0-2.481-2.019-4.5-4.5-4.5H6A4.505 4.505 0 0 0 1.5 6v4.5h-.375C.506 10.5 0 11.006 0 11.625v11.25C0 23.494.506 24 1.125 24h12.75c.619 0 1.125-.506 1.125-1.125v-11.25c0-.619-.506-1.125-1.125-1.125zM4.5 6c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v4.5h-6V6z" />
  </svg>
);
export default SvgLock;
