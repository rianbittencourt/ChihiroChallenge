import * as React from "react";
import { SVGProps } from "react";
const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={25}
  fill="none"
  {...props}
>
  <path
    fill="#0B0A0A"
    d="M21.983 10.815 8.476 2.552A1.875 1.875 0 0 0 5.625 4.14v16.524a1.875 1.875 0 0 0 2.85 1.587l13.508-8.262a1.858 1.858 0 0 0 0-3.175ZM7.875 19.98V4.822l12.39 7.58-12.39 7.58Z"
  />
</svg>
);
export default PlayIcon;
