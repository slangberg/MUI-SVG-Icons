import * as React from "react";
import { SVGProps } from "react";
const SvgInsertTemplate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 4.5h3V6H9zm4.5 0h3V6h-3zm7.5 0v6h-4.5V9h3V6H18V4.5zM7.5 9h3v1.5h-3zM12 9h3v1.5h-3zM4.5 6v3H6v1.5H3v-6h4.5V6zM9 13.5h3V15H9zm4.5 0h3V15h-3zm7.5 0v6h-4.5V18h3v-3H18v-1.5zM7.5 18h3v1.5h-3zm4.5 0h3v1.5h-3zm-7.5-3v3H6v1.5H3v-6h4.5V15zm18-13.5h-21v21h21v-21zM24 0v24H0V0h24z" />
  </svg>
);
export default SvgInsertTemplate;
