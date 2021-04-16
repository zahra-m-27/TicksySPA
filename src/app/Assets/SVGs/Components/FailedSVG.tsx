interface Props {
  className?: string;
}

export default function FailedSVG({className}: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="57.911"
      height="57.911"
      viewBox="0 0 57.911 57.911">
      <path
        fill="#ff3a3a"
        d="M31.956 3a28.956 28.956 0 1 0 28.955 28.956A28.989 28.989 0 0 0 31.956 3zm0 4.455a24.5 24.5 0 1 1-24.5 24.5 24.47 24.47 0 0 1 24.5-24.5zm-2.228 11.136V36.41h4.455V18.591zm0 22.274v4.455h4.455v-4.455z"
        transform="translate(-3 -3)"
      />
    </svg>
  );
}
