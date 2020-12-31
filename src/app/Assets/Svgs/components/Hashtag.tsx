import React from "react";

interface Props {
  className?: string;
}
export default function Hashtag({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30.787"
      height="30.787"
      viewBox="0 0 30.787 30.787"
    >
      <path
        fill="#53c4eb"
        d="M6.8 4A2.8 2.8 0 0 0 4 6.8v25.188a2.8 2.8 0 0 0 2.8 2.8h25.188a2.8 2.8 0 0 0 2.8-2.8V6.8a2.8 2.8 0 0 0-2.8-2.8zm8.4 5.6a1.4 1.4 0 0 1 1.4 1.4v2.8h5.6V11a1.4 1.4 0 0 1 2.8 0v2.8h2.8a1.4 1.4 0 0 1 0 2.8H25v5.6h2.8a1.4 1.4 0 0 1 0 2.8H25v2.8a1.4 1.4 0 0 1-2.8 0V25h-5.6v2.8a1.4 1.4 0 0 1-2.8 0V25H11a1.4 1.4 0 0 1 0-2.8h2.8v-5.6H11a1.4 1.4 0 0 1 0-2.8h2.8V11a1.4 1.4 0 0 1 1.4-1.4zm1.4 7v5.6h5.6v-5.6z"
        transform="translate(-4 -4)"
      />
    </svg>
  );
}
