import * as React from "react";
import { SVGProps } from "react";
const GoogleLogo = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#fff"
      d="M28 20a8 8 0 1 1-1.83-5.091.665.665 0 0 1-.308 1.082.669.669 0 0 1-.719-.234 6.666 6.666 0 1 0 1.49 4.91H20a.667.667 0 1 1 0-1.334h7.333A.667.667 0 0 1 28 20Z"
    />
  </svg>
);
export default GoogleLogo;
