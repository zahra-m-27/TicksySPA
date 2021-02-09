interface Props {
  className?: string;
}

export default function SuccessTickSVG({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="58.911"
      height="58.911"
      viewBox="0 0 58.911 58.911"
    >
      <path
        fill="#22ce4a"
        d="M33.455 4a29.455 29.455 0 1 0 29.456 29.455A29.493 29.493 0 0 0 33.455 4zm0 4.909A24.546 24.546 0 1 1 8.909 33.455 24.509 24.509 0 0 1 33.455 8.909zM45.6 23.637L30.262 38.978 22.285 31l-3.433 3.437 11.41 11.415 18.779-18.778z"
        transform="translate(-4 -4)"
      />
    </svg>
  );
}
