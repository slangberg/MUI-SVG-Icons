import * as React from "react";
import { SVGProps } from "react";
const SvgHammer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m23.672 19.429-7.067-7.067a1.127 1.127 0 0 0-1.591 0l-.53.53-4.313-4.313L17.25 1.5h-7.5L6.421 4.829l-.33-.329H4.5v1.591l.329.329L0 11.25 3.75 15l4.829-4.829 4.313 4.313-.53.53a1.127 1.127 0 0 0 0 1.591l7.067 7.067a1.127 1.127 0 0 0 1.591 0l2.652-2.652a1.127 1.127 0 0 0 0-1.591z" />
  </svg>
);
export default SvgHammer;
