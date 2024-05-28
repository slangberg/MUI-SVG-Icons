import * as React from "react";
import { SVGProps } from "react";
const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M10.5 3v-.375c0-.619-.506-1.125-1.125-1.125h-3.75c-.619 0-1.125.506-1.125 1.125V3H0v3h4.5v.375c0 .619.506 1.125 1.125 1.125h3.75c.619 0 1.125-.506 1.125-1.125V6H24V3H10.5zM6 6V3h3v3H6zm13.5 4.125C19.5 9.506 18.994 9 18.375 9h-3.75c-.619 0-1.125.506-1.125 1.125v.375H0v3h13.5v.375c0 .619.506 1.125 1.125 1.125h3.75c.619 0 1.125-.506 1.125-1.125V13.5H24v-3h-4.5v-.375zM15 13.5v-3h3v3h-3zm-4.5 4.125c0-.619-.506-1.125-1.125-1.125h-3.75c-.619 0-1.125.506-1.125 1.125V18H0v3h4.5v.375c0 .619.506 1.125 1.125 1.125h3.75c.619 0 1.125-.506 1.125-1.125V21H24v-3H10.5v-.375zM6 21v-3h3v3H6z" />
  </svg>
);
export default SvgEqualizer;
