import * as React from "react";
import { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6 15s1.379-4.5 9-4.5V15l9-6-9-6v4.5c-6 0-9 3.742-9 7.5zm10.5 3H3V9h2.95c.237-.279.49-.547.761-.801C7.741 7.234 8.974 6.496 10.37 6H-.001v15h19.5v-6.296l-3 2V18z" />
  </svg>
);
export default SvgShare;
