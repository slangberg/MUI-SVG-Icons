import * as React from "react";
import { SVGProps } from "react";
const SvgTelegram = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.897 8.227-1.969 9.277c-.136.661-.534.816-1.088.511l-3-2.217-1.439 1.402c-.169.164-.3.3-.6.3-.389 0-.323-.145-.455-.516l-1.022-3.356-2.967-.923c-.642-.197-.647-.637.145-.952l11.559-4.462c.525-.239 1.036.127.834.937z" />
  </svg>
);
export default SvgTelegram;
