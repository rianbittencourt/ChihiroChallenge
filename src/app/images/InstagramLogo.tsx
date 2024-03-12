import * as React from "react";
import { SVGProps } from "react";
const InstagramLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <rect
      width={39}
      height={39}
      x={0.5}
      y={0.5}
      fill="#fff"
      fillOpacity={0.2}
      rx={19.5}
    />
    <rect width={39} height={39} x={0.5} y={0.5} stroke="#fff" rx={19.5} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24.167 11.667h-8.334a4.167 4.167 0 0 0-4.166 4.166v8.334a4.167 4.167 0 0 0 4.166 4.166h8.334a4.167 4.167 0 0 0 4.166-4.166v-8.334a4.167 4.167 0 0 0-4.166-4.166Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M23.333 19.475a3.333 3.333 0 1 1-6.594.978 3.333 3.333 0 0 1 6.594-.978ZM24.583 15.417h.009"
    />
  </svg>
);
export default InstagramLogo;
