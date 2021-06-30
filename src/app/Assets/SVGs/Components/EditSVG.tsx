import React from 'react';

interface Props {
  className?: string;
}

export default function EditSVG({className}: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M18.414062 2C18.158188 2 17.902031 2.0974687 17.707031 2.2929688L16 4L20 8L21.707031 6.2929688C22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062L19.121094 2.2929688C18.925594 2.0974687 18.669937 2 18.414062 2 z M 14.5 5.5L3 17L3 21L7 21L18.5 9.5L14.5 5.5 z" />
    </svg>
  );
}
