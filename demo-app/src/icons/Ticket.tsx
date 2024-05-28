import * as React from "react";
import { SVGProps } from "react";
const SvgTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m13.5 7.5 3 3-6 6-3-3zm9.973-.527L21.75 5.25 21 6a2.12 2.12 0 1 1-2.999-3l.75-.75L17.028.527a1.812 1.812 0 0 0-2.554 0L.528 14.473a1.812 1.812 0 0 0 0 2.554l1.723 1.723.749-.749a2.12 2.12 0 1 1 3 3l-.75.75 1.723 1.723a1.812 1.812 0 0 0 2.554 0L23.473 9.528a1.812 1.812 0 0 0 0-2.554zM10.5 19.5l-6-6 9-9 6 6-9 9z" />
  </svg>
);
export default SvgTicket;
