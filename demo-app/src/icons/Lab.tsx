import * as React from "react";
import { SVGProps } from "react";
const SvgLab = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22.413 18.855 15 6.503V1.5h.75c.413 0 .75-.337.75-.75S16.163 0 15.75 0h-7.5c-.413 0-.75.338-.75.75s.337.75.75.75H9v5.003L1.587 18.855C-.111 21.685 1.2 24 4.5 24h15c3.3 0 4.611-2.315 2.913-5.145zM5.649 15 10.5 6.916V1.5h3v5.416L18.351 15H5.65z" />
  </svg>
);
export default SvgLab;
