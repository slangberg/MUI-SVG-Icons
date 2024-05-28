import * as React from "react";
import { SVGProps } from "react";
const SvgBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 1.5c6.627 0 12 4.365 12 9.75S18.627 21 12 21a14.94 14.94 0 0 1-1.871-.118C7.551 23.46 4.475 23.922 1.5 23.99v-.631c1.606-.787 3-2.22 3-3.859 0-.229-.018-.453-.051-.673C1.735 17.04 0 14.309 0 11.25 0 5.865 5.373 1.5 12 1.5z" />
  </svg>
);
export default SvgBubble;
