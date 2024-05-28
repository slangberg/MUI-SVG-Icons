import * as React from "react";
import { SVGProps } from "react";
const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 3h3v15H0zm4.5 0H6v15H4.5zm3 0H9v15H7.5zM12 3h1.5v15H12zm6 0h1.5v15H18zm4.5 0H24v15h-1.5zM15 3h.75v15H15zm-4.5 0h.75v15h-.75zm9.75 0H21v15h-.75zM0 19.5h1.5V21H0zm4.5 0H6V21H4.5zm3 0H9V21H7.5zm7.5 0h1.5V21H15zm7.5 0H24V21h-1.5zm-4.5 0h3V21h-3zm-7.5 0h3V21h-3z" />
  </svg>
);
export default SvgBarcode;
