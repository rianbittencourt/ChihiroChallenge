import * as React from "react";
import { SVGProps } from "react";
const FacebookLogo = (props: SVGProps<SVGSVGElement>) => (
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
    d="M20 11.875A8.125 8.125 0 1 0 28.125 20 8.133 8.133 0 0 0 20 11.875Zm.625 14.971v-4.971H22.5a.624.624 0 1 0 0-1.25h-1.875V18.75a1.25 1.25 0 0 1 1.25-1.25h1.25a.624.624 0 1 0 0-1.25h-1.25a2.5 2.5 0 0 0-2.5 2.5v1.875H17.5a.624.624 0 1 0 0 1.25h1.875v4.971a6.875 6.875 0 1 1 1.25 0Z"
  />
</svg>
);

export default FacebookLogo;
