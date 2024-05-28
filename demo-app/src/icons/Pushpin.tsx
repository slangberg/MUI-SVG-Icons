import * as React from "react";
import { SVGProps } from "react";
const SvgPushpin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12.75 0 10.5 2.25l2.25 2.25-5.25 6H2.25l4.125 4.125L0 23.077V24h.923l8.452-6.375L13.5 21.75V16.5l6-5.25 2.25 2.25L24 11.25 12.75 0zM10.5 12.75 9 11.25 14.25 6l1.5 1.5-5.25 5.25z" />
  </svg>
);
export default SvgPushpin;
