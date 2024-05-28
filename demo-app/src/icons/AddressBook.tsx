import * as React from "react";
import { SVGProps } from "react";
const SvgAddressBook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4.5 0v24h18V0h-18zm9 6.008a2.992 2.992 0 1 1 0 5.984 2.992 2.992 0 0 1 0-5.984zM18 18H9v-1.5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3V18zM1.5 1.5h2.25V6H1.5V1.5zM1.5 7.5h2.25V12H1.5V7.5zM1.5 13.5h2.25V18H1.5v-4.5zM1.5 19.5h2.25V24H1.5v-4.5z" />
  </svg>
);
export default SvgAddressBook;
