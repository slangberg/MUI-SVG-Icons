import * as React from "react";
import { SVGProps } from "react";
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M10.5 13.5h3v-6H18l-6-6-6 6h4.5zm4.5-3.375v2.314L21.869 15 12 18.68 2.131 15 9 12.439v-2.314L0 13.5v6L12 24l12-4.5v-6z" />
  </svg>
);
export default SvgUpload;
