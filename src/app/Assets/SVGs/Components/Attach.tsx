interface Props {
  className?: string;
}
export default function Attach({className}: Props) {
  return (
    <svg
      height="41"
      width="35.637"
      className={className}
      viewBox="0 0 35.637 41"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#76787d"
        transform="translate(-5.583 -4)"
        d="M31.943 4a9.177 9.177 0 0 0-6.519 2.725L9.395 22.754a13.035 13.035 0 0 0 18.434 18.434L38.515 30.5l-2.4-2.4-10.691 10.684A9.634 9.634 0 0 1 11.8 25.159l16.029-16.03a5.856 5.856 0 0 1 8.282 8.282l-16.03 16.03a2.078 2.078 0 0 1-2.938-2.941l14.693-14.692-2.4-2.4L14.738 28.1a5.478 5.478 0 1 0 7.748 7.747l16.029-16.031A9.27 9.27 0 0 0 31.943 4z"
      />
    </svg>
  );
}
