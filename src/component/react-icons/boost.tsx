import * as React from "react"
const Boost = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    className="text-info"
    viewBox="0 0 40 40"
    {...props}
  >
    <title>{"spaceship"}</title>
    <g fill="#2563eb" fillRule="nonzero">
      <path
        d="M39.3.707a1.667 1.667 0 0 0-1.268-.49c-23.38 1.22-32.017 22.046-32.1 22.256-.25.62-.105 1.328.366 1.8l9.429 9.429a1.667 1.667 0 0 0 1.808.363c.208-.085 20.923-8.818 22.247-32.088A1.667 1.667 0 0 0 39.3.707ZM25.69 19.023a3.333 3.333 0 1 1-4.715-4.713 3.333 3.333 0 0 1 4.715 4.713ZM1.855 31.407a4.74 4.74 0 1 1 6.703 6.703C6.707 39.962 0 40 0 40s0-6.743 1.855-8.593Z"
        className="color-foreground"
      />
      <path
        d="M17.262 3.902c-4.768-.83-9.64.715-13.059 4.14a15.14 15.14 0 0 0-2.306 3 1.667 1.667 0 0 0 .258 2.025l3.315 3.316A44.372 44.372 0 0 1 17.262 3.902ZM36.098 22.738c.83 4.768-.715 9.64-4.14 13.059a15.14 15.14 0 0 1-3 2.306 1.667 1.667 0 0 1-2.025-.258l-3.316-3.315a44.372 44.372 0 0 0 12.481-11.792Z"
        className="color-background"
        opacity={0.599}
      />
    </g>
  </svg>
)
export default Boost