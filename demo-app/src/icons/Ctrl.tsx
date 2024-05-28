import * as React from "react";
import { SVGProps } from "react";
const SvgCtrl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M17.25 10.5a.751.751 0 0 1-.565-.256l-4.686-5.355-4.686 5.355a.75.75 0 0 1-1.129-.987l5.25-6a.748.748 0 0 1 1.128 0l5.25 6a.75.75 0 0 1-.565 1.244z" />
  </svg>
);
export default SvgCtrl;
