import * as React from "react";
import { SVGProps } from "react";
const SvgWoman = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M13.5 2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zM16.852 12 18 11.168l-3.124-4.831A.751.751 0 0 0 14.25 6h-6a.751.751 0 0 0-.626.337L4.5 11.168 5.648 12l2.593-3.366.901 2.103-3.143 5.762h2.875l.5 7.5h1.5v-7.5h.75v7.5h1.5l.5-7.5h2.875l-3.143-5.762.901-2.103L16.85 12z" />
  </svg>
);
export default SvgWoman;
