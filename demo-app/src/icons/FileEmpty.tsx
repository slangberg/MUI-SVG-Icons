import * as React from "react";
import { SVGProps } from "react";
const SvgFileEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21.511 5.369c-.521-.71-1.246-1.54-2.043-2.337S17.841 1.509 17.131.989C15.922.103 15.336 0 15 0H3.375A1.877 1.877 0 0 0 1.5 1.875v20.25C1.5 23.159 2.341 24 3.375 24h17.25a1.877 1.877 0 0 0 1.875-1.875V7.5c0-.336-.102-.922-.989-2.131zm-3.104-1.276c.72.72 1.284 1.369 1.701 1.907H16.5V2.392c.539.417 1.188.982 1.907 1.701zM21 22.125a.38.38 0 0 1-.375.375H3.375A.38.38 0 0 1 3 22.125V1.875a.38.38 0 0 1 .375-.375H15v5.25c0 .414.336.75.75.75H21v14.625z" />
  </svg>
);
export default SvgFileEmpty;