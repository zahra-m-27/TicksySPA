import React from "react";

interface Props {
  className?: string;
}
export default function InVisiblePassSvg({ className }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="#5B5B5B"
      width={24}
      height={24}
      className={className}
    >
      <path d="M2.675781 2.023438L1.96875 2.726563L3.9375 4.695313C1.171875 5.871094 0.0546875 8.15625 -0.0078125 8.289063L-0.101563 8.5L-0.0078125 8.710938C0.0742188 8.886719 2.058594 13 7.445313 13C9.039063 13 10.328125 12.636719 11.363281 12.125L13.21875 13.980469L13.925781 13.269531L11.53125 10.875L11.347656 10.695313C11.351563 10.695313 11.351563 10.695313 11.351563 10.691406L10.621094 9.960938C10.617188 9.960938 10.617188 9.960938 10.617188 9.960938L8.921875 8.269531C8.921875 8.269531 8.925781 8.265625 8.921875 8.265625L7.683594 7.023438C7.683594 7.023438 7.679688 7.023438 7.679688 7.023438L5.984375 5.328125C5.984375 5.328125 5.988281 5.328125 5.988281 5.328125L4.984375 4.328125C4.984375 4.328125 4.980469 4.324219 4.980469 4.328125 Z M 7.445313 4C6.992188 4 6.570313 4.039063 6.164063 4.09375L7.109375 5.03125C7.222656 5.023438 7.332031 5 7.445313 5C9.378906 5 10.949219 6.570313 10.949219 8.5C10.949219 8.617188 10.925781 8.726563 10.914063 8.84375L11.769531 9.695313C11.878906 9.316406 11.949219 8.917969 11.949219 8.5C11.949219 7.503906 11.613281 6.585938 11.058594 5.839844C12.722656 6.703125 13.589844 7.988281 13.882813 8.5C13.679688 8.847656 13.1875 9.574219 12.351563 10.277344L13.074219 11C14.316406 9.925781 14.863281 8.804688 14.90625 8.710938L15 8.5L14.902344 8.289063C14.820313 8.113281 12.835938 4 7.445313 4 Z M 3.824219 5.859375C3.28125 6.601563 2.945313 7.511719 2.945313 8.5C2.945313 9.5 3.285156 10.414063 3.839844 11.160156C2.175781 10.300781 1.308594 9.011719 1.015625 8.5C1.304688 8.003906 2.175781 6.722656 3.824219 5.859375 Z M 5.132813 5.890625L6.546875 7.304688C6.183594 7.582031 5.945313 8.011719 5.945313 8.5C5.945313 9.328125 6.621094 10 7.445313 10C7.9375 10 8.367188 9.761719 8.640625 9.398438L10.058594 10.816406C9.417969 11.539063 8.488281 12 7.445313 12C5.515625 12 3.945313 10.429688 3.945313 8.5C3.945313 7.460938 4.40625 6.53125 5.132813 5.890625Z" />
    </svg>
  );
}