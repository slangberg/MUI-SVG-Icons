import * as React from "react";
import { SVGProps } from "react";
const SvgRadioChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9-4.029 9-9 9zm-4.5-9a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z" />
  </svg>
);
export default SvgRadioChecked;
