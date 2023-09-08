import * as React from "react"
const Person = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    className="text-info"
    viewBox="0 0 46 42"
    {...props}
  >
    <title>{"customer-support"}</title>
    <g fill="#2563eb" fillRule="nonzero">
      <path
        d="M45 0H26a1 1 0 0 0-1 1v19a1.001 1.001 0 0 0 1.6.8l7.733-5.8H45a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1Z"
        className="color-background"
        opacity={0.599}
      />
      <path
        d="M22.883 32.86C20.761 32.012 17.324 31 13 31c-4.324 0-7.761 1.012-9.884 1.86A4.962 4.962 0 0 0 0 37.494V41a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-3.506a4.961 4.961 0 0 0-3.117-4.634ZM13 28c4.432 0 8-5.471 8-10 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 4.529 3.568 10 8 10Z"
        className="color-foreground"
      />
    </g>
  </svg>
)
export default Person
