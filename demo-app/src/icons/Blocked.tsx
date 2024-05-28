import * as React from "react";
import { SVGProps } from "react";
const SvgBlocked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20.485 3.515C18.218 1.249 15.205 0 12 0S5.781 1.248 3.515 3.515C1.249 5.782 0 8.795 0 12s1.248 6.219 3.515 8.485C5.782 22.751 8.795 24 12 24s6.219-1.248 8.485-3.515C22.751 18.218 24 15.205 24 12s-1.248-6.219-3.515-8.485zM21 12c0 1.941-.618 3.74-1.667 5.212L6.788 4.667A8.952 8.952 0 0 1 12 3c4.963 0 9 4.037 9 9zM3 12c0-1.941.618-3.74 1.667-5.212l12.545 12.545A8.952 8.952 0 0 1 12 21c-4.963 0-9-4.037-9-9z" />
  </svg>
);
export default SvgBlocked;
