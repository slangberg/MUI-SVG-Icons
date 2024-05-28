import * as React from "react";
import { SVGProps } from "react";
const SvgTrophy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19.5 4.5v-3h-15v3H0v3a4.5 4.5 0 0 0 5.85 4.294 7.503 7.503 0 0 0 4.65 3.056v4.65H9a3 3 0 0 0-3 3h12a3 3 0 0 0-3-3h-1.5v-4.65a7.505 7.505 0 0 0 4.65-3.056A4.5 4.5 0 0 0 24 7.5v-3h-4.5zm-15 5.719A2.722 2.722 0 0 1 1.781 7.5V6H4.5v1.5c0 .942.174 1.843.491 2.673a2.734 2.734 0 0 1-.491.045zM22.219 7.5a2.722 2.722 0 0 1-3.21 2.674 7.484 7.484 0 0 0 .491-2.673v-1.5h2.719v1.5z" />
  </svg>
);
export default SvgTrophy;
