interface Props {
  className?: string;
}
export default function PaperPlane({className}: Props) {
  return (
    <svg
      width="33.231"
      height="30.462"
      className={className}
      viewBox="0 0 33.231 30.462"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#53c4eb"
        transform="translate(0 -1)"
        d="M0 1v13.154l26.308 2.077L0 18.308v13.154l33.231-15.231z"
      />
    </svg>
  );
}
