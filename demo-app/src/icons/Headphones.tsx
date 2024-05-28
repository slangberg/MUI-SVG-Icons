import * as React from "react";
import { SVGProps } from "react";
const SvgHeadphones = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6.75 13.5h-1.5V24h1.5c.413 0 .75-.337.75-.75v-9a.752.752 0 0 0-.75-.75zM17.25 13.5a.752.752 0 0 0-.75.75v9c0 .413.337.75.75.75h1.5V13.5h-1.5z" />
    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 1.439.254 2.819.718 4.098A5.25 5.25 0 0 0 4.5 23.946V13.553a5.215 5.215 0 0 0-2.057.759A9.75 9.75 0 0 1 12 2.624a9.75 9.75 0 0 1 9.557 11.688 5.217 5.217 0 0 0-2.057-.76v10.393a5.251 5.251 0 0 0 3.782-7.848A11.97 11.97 0 0 0 24 11.999z" />
  </svg>
);
export default SvgHeadphones;
