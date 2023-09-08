import * as React from "react"
const CubeIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    className="text-info"
    viewBox="0 0 42 42"
    {...props}
  >
    <title>{"box-3d-50"}</title>
    <g fill="#2563eb" fillRule="nonzero">
      <path
        d="m22.76 19.309 16.139-8.07a1 1 0 0 0 0-1.788L20.274.138a1.312 1.312 0 0 0-1.175 0l-15.998 8a1 1 0 0 0 0 1.789l18.764 9.382a1 1 0 0 0 .895 0Z"
        className="color-foreground"
      />
      <path
        d="M23.625 22.43v17.45a1 1 0 0 0 1.447.895l16.202-8.102A1.31 1.31 0 0 0 42 31.5V14.242a1 1 0 0 0-1.447-.895l-16.375 8.188a1 1 0 0 0-.553.894ZM20.447 21.535l-19-9.5A1 1 0 0 0 0 12.929v17.259c0 .497.28.951.726 1.174l18.827 9.413A1 1 0 0 0 21 39.881V22.429a1 1 0 0 0-.553-.894Z"
        className="color-background"
        opacity={0.7}
      />
    </g>
  </svg>
)
export default CubeIcon