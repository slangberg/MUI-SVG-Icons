import * as React from "react";
import { SVGProps } from "react";
const SvgStarEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m24 9.306-8.292-1.205L12 .587 8.292 8.101 0 9.306l6 5.849-1.416 8.258L12 19.514l7.416 3.899L18 15.155l6-5.849zM12 17.66l-5.237 2.753 1-5.832-4.237-4.13L9.382 9.6l2.619-5.306L14.62 9.6l5.856.851-4.237 4.13 1 5.832-5.237-2.753z" />
  </svg>
);
export default SvgStarEmpty;