import * as React from "react";
import { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19.5 6 24 1.5 22.5 0 18 4.5H7.5V0h-3v4.5H0v3h4.5v12h12V24h3v-4.5H24v-3h-4.5V6zm-12 1.5H15L7.5 15V7.5zm1.5 9L16.5 9v7.5H9z" />
  </svg>
);
export default SvgCrop;
