export default function ClassNames(...classNames: (string | undefined)[]) {
  return classNames
    .filter((className) => className)
    .map((className) => className?.trim())
    .join(" ")
    .trim();
}
