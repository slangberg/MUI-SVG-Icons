import * as React from "react";
import { SVGProps } from "react";
const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m23.256 20.423-5.685-4.835c-.588-.529-1.216-.772-1.724-.748A9 9 0 0 0 9 0C4.029 0 0 4.029 0 9a9 9 0 0 0 14.84 6.847c-.023.508.219 1.136.748 1.724l4.835 5.685c.828.92 2.18.997 3.005.172s.747-2.177-.172-3.005zM9 15A6 6 0 1 1 9 3a6 6 0 0 1 0 12zM4.5 7.5h9v3h-9z" />
  </svg>
);
export default SvgZoomOut;
