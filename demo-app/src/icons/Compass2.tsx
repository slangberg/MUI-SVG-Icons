import * as React from "react";
import { SVGProps } from "react";
const SvgCompass2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM2.25 12A9.75 9.75 0 0 1 12 2.25c2.568 0 4.904.993 6.645 2.616L9 9l-4.134 9.645A9.713 9.713 0 0 1 2.25 12zm11.465 1.715-6.002 2.572 2.572-6.002 3.43 3.43zM12 21.75a9.713 9.713 0 0 1-6.645-2.616L15 15l4.134-9.645A9.713 9.713 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75z" />
  </svg>
);
export default SvgCompass2;
