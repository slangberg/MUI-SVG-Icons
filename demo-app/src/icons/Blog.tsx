import * as React from "react";
import { SVGProps } from "react";
const SvgBlog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 0v2.25a12.71 12.71 0 0 1 9.015 3.734 12.71 12.71 0 0 1 3.734 9.015h2.25c0-8.284-6.716-15-15-15z" />
    <path d="M9 4.5v2.25c2.204 0 4.275.858 5.834 2.416S17.25 12.796 17.25 15h2.25C19.5 9.201 14.799 4.5 9 4.5z" />
    <path d="m11.25 9-1.5 1.5L4.5 12 0 21.75l.595.595 5.456-5.456a1.5 1.5 0 1 1 1.061 1.061l-5.456 5.456.595.595 9.75-4.5 1.5-5.25 1.5-1.5-3.75-3.75z" />
  </svg>
);
export default SvgBlog;
