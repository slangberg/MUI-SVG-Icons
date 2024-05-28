import * as React from "react";
import { SVGProps } from "react";
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m12 2.174 10.057 20.044H1.943L12 2.174zM12 0c-.517 0-1.035.349-1.427 1.046L.329 21.463C-.456 22.858.212 24 1.813 24h20.374c1.601 0 2.269-1.142 1.484-2.537L13.427 1.046C13.035.348 12.517 0 12 0z" />
    <path d="M13.5 19.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001zM12 16.5a1.5 1.5 0 0 1-1.5-1.5v-4.5a1.5 1.5 0 0 1 3 0V15a1.5 1.5 0 0 1-1.5 1.5z" />
  </svg>
);
export default SvgWarning;
