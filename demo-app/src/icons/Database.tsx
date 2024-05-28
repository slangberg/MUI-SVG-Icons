import * as React from "react";
import { SVGProps } from "react";
const SvgDatabase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0C5.373 0 0 1.679 0 3.75v3c0 2.071 5.373 3.75 12 3.75s12-1.679 12-3.75v-3C24 1.679 18.627 0 12 0z" />
    <path d="M12 12.75C5.373 12.75 0 11.071 0 9v4.5c0 2.071 5.373 3.75 12 3.75s12-1.679 12-3.75V9c0 2.071-5.373 3.75-12 3.75z" />
    <path d="M12 19.5c-6.627 0-12-1.679-12-3.75v4.5C0 22.321 5.373 24 12 24s12-1.679 12-3.75v-4.5c0 2.071-5.373 3.75-12 3.75z" />
  </svg>
);
export default SvgDatabase;
