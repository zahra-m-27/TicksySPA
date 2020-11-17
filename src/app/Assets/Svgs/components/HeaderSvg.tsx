import React from "react";

interface Props {
  className?: string;
}
function HeaderSvg({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1922.765 229.753"
      className={className}
    >
      <defs>
        <linearGradient
          id="b7egjf4t7a"
          x1=".5"
          x2=".5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#4cb0dd" />
          <stop offset="1" stop-color="#0f67c4" />
        </linearGradient>
      </defs>
      <path
        fill="url(#b7egjf4t7a)"
        stroke="#707070"
        d="M6320 987.377s-128.97 111.44-185.819 26.7-148.084-61.768-209.125 0c-75.494 66.167-123.852 41.507-192.883-15.565s-119.437-55.276-217.247 15.565-94.292 90.132-192.883 0-172.58-43.236-276.127 15.565-219.277 15.565-278.157-31.13-123.412-35.532-178.656 31.13c-76.13 87.073-190.867 55.343-190.867 55.343v-223.1H6320z"
        transform="translate(-4397.735 -861.382)"
      />
    </svg>
  );
}
export default HeaderSvg;
