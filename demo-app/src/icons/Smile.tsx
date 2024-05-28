import * as React from "react";
import { SVGProps } from "react";
const SvgSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-21.75c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zM6 7.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6 7.5zm9 0a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 15 7.5zm1.502 7.201 1.93 1.158C17.12 18.04 14.731 19.5 12 19.5s-5.12-1.46-6.432-3.641l1.93-1.158c.918 1.527 2.591 2.549 4.502 2.549s3.584-1.022 4.502-2.549z" />
  </svg>
);
export default SvgSmile;
