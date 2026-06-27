"use client";

import { useState, useEffect } from "react";

type TypewriterProps = {
  words: string[];
};

export function Typewriter({ words }: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          setText(current.slice(0, text.length - 1));

          if (text.length - 1 === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 40 : 90,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className="text-brand">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-current align-middle h-[0.9em]" />
    </span>
  );
}
