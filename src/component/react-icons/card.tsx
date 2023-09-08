import * as React from "react"
const Card = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    className="text-blue-500"
    viewBox="0 0 43 36"
    {...props}
  >
    <title>{"credit-card"}</title>
    <g fill="#2563eb" fillRule="nonzero">
      <path
        d="M43 10.748V3.583A3.582 3.582 0 0 0 39.417 0H3.583A3.582 3.582 0 0 0 0 3.583v7.165h43Z"
        className="color-background"
        opacity={0.594}
      />
      <path
        d="M0 16.125V32.25a3.582 3.582 0 0 0 3.583 3.583h35.834A3.582 3.582 0 0 0 43 32.25V16.125H0Zm19.708 10.75H7.167v-3.583h12.541v3.583Zm16.125 0h-7.166v-3.583h7.166v3.583Z"
        className="color-foreground"
      />
    </g>
  </svg>
)
export default Card
