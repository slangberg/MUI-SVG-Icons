import * as React from "react";
import { SVGProps } from "react";
const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 2.25c-2.604 0-5.053 1.014-6.894 2.856S2.25 9.396 2.25 12s1.014 5.053 2.856 6.894S9.396 21.75 12 21.75s5.053-1.014 6.894-2.856S21.75 14.604 21.75 12s-1.014-5.053-2.856-6.894S14.604 2.25 12 2.25zM12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm-1.5 16.5h3v3h-3zm0-12h3v9h-3z" />
  </svg>
);
export default SvgNotification;
