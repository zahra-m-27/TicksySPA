import React from "react";

interface Props {
  className?: string;
  onClick?: () => void;
}

export default function LessThan({ className, onClick }: Props) {
  return (
    <svg
      onClick={onClick}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="13.98"
      height="23.889"
      viewBox="0 0 13.98 23.889"
    >
      <path
        fill="#76787d"
        d="M28.976 8.313l2.035 2.036-9.931 9.908 9.931 9.931L29 32.2 18.06 21.264l-1.029-1.007 1.029-1.007z"
        transform="translate(-17.031 -8.313)"
      />
    </svg>
  );
}
