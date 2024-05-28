import * as React from "react";
import { SVGProps } from "react";
const SvgUserCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22.5 14.25 15.75 21l-2.25-2.25-1.5 1.5L15.75 24 24 15.75z" />
    <path d="M10.5 18H18v-2.698c-1.575-.919-3.663-1.549-6-1.74v-1.237c1.652-.931 3-3.252 3-5.574 0-3.728 0-6.75-4.5-6.75S6 3.023 6 6.751c0 2.322 1.348 4.643 3 5.574v1.237c-5.088.416-9 2.916-9 5.939h10.5v-1.5z" />
  </svg>
);
export default SvgUserCheck;
