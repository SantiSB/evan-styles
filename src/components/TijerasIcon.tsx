import * as React from "react";
import { SVGProps } from "react";
const TijerasIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-scissors"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M8.6 8.6 19 19M8.6 15.4 19 5" />
  </svg>
);
export default TijerasIcon;
