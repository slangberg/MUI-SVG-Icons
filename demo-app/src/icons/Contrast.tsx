import * as React from "react";
import { SVGProps } from "react";
const SvgContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM3 12a9 9 0 0 1 9-9v18a9 9 0 0 1-9-9z" />
  </svg>
);
export default SvgContrast;
