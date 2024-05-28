import * as React from "react";
import { SVGProps } from "react";
const SvgEyedropper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M23.121.879a3 3 0 0 0-4.243 0l-4.034 4.034-2.845-2.845L8.817 5.25l2.494 2.494L.246 18.809a.838.838 0 0 0-.241.69h-.006v3.75c0 .414.336.75.75.75h3.844a.841.841 0 0 0 .597-.247l11.065-11.065 2.494 2.494 3.182-3.182-2.845-2.845L23.12 5.12a3 3 0 0 0 0-4.243zM4.057 22.5H1.5v-2.557L12.506 8.937l2.557 2.557L4.057 22.5z" />
  </svg>
);
export default SvgEyedropper;
