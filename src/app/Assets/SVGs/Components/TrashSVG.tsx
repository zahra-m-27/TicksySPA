import React from 'react';

interface Props {
  className?: string;
}

export default function TrashSVG({className}: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M10 2L9 3L5 3C4.4 3 4 3.4 4 4C4 4.6 4.4 5 5 5L7 5L17 5L19 5C19.6 5 20 4.6 20 4C20 3.4 19.6 3 19 3L15 3L14 2L10 2 z M 5 7L5 20C5 21.1 5.9 22 7 22L17 22C18.1 22 19 21.1 19 20L19 7L5 7 z M 9 9C9.6 9 10 9.4 10 10L10 19C10 19.6 9.6 20 9 20C8.4 20 8 19.6 8 19L8 10C8 9.4 8.4 9 9 9 z M 15 9C15.6 9 16 9.4 16 10L16 19C16 19.6 15.6 20 15 20C14.4 20 14 19.6 14 19L14 10C14 9.4 14.4 9 15 9 z" />
    </svg>
  );
}
