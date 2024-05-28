import * as React from "react";
import { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M23.25 9H15V.75a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 9 .75V9H.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75H9v8.25c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V15h8.25a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75z" />
  </svg>
);
export default SvgPlus;
