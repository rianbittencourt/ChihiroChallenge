import * as React from "react";
import { SVGProps } from "react";
const TwitterLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M29.327 15.386A.624.624 0 0 0 28.75 15h-2.377a3.801 3.801 0 0 0-3.24-1.875 3.665 3.665 0 0 0-2.637 1.07 3.744 3.744 0 0 0-1.121 2.68v.476c-3.145-.83-5.718-3.388-5.745-3.416a.626.626 0 0 0-1.067.385c-.336 3.733.748 6.232 1.719 7.67a8.665 8.665 0 0 0 1.71 1.89c-1.19 1.37-3.064 2.09-3.084 2.097a.624.624 0 0 0-.301.932c.059.088.293.395.866.682.707.354 1.643.534 2.777.534 5.521 0 10.134-4.252 10.605-9.722l2.337-2.336a.625.625 0 0 0 .135-.681Zm-3.515 2.298a.625.625 0 0 0-.181.401c-.319 4.93-4.437 8.79-9.381 8.79-.825 0-1.406-.11-1.814-.24.9-.489 2.153-1.329 2.96-2.538a.624.624 0 0 0-.209-.888c-.036-.02-3.43-2.057-3.437-7.5 1.25 1.016 3.535 2.592 6.146 3.03a.625.625 0 0 0 .729-.614v-1.25a2.5 2.5 0 0 1 .75-1.79 2.418 2.418 0 0 1 1.742-.71c.99.013 1.913.616 2.3 1.5a.625.625 0 0 0 .573.375h1.25l-1.428 1.434Z"
    />
  </svg>
);
export default TwitterLogo;
