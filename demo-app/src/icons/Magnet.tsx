import * as React from "react";
import { SVGProps } from "react";
const SvgMagnet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 0h-6l1.5 13.5a4.5 4.5 0 0 1-9 0L9 0H3L1.5 13.5C1.5 19.299 6.201 24 12 24s10.5-4.701 10.5-10.5L21 0zm-2.769 19.731c-1.664 1.664-3.878 2.581-6.231 2.581s-4.567-.917-6.231-2.581a8.754 8.754 0 0 1-2.581-6.142l.846-7.613h2.604l-.826 7.43v.094c0 1.653.644 3.207 1.812 4.375s2.722 1.812 4.375 1.812 3.207-.644 4.375-1.812a6.145 6.145 0 0 0 1.812-4.375v-.093l-.01-.093-.815-7.337h2.604l.846 7.613a8.752 8.752 0 0 1-2.581 6.142z" />
  </svg>
);
export default SvgMagnet;
