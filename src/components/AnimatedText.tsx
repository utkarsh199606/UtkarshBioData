import React from 'react';

export function AnimatedText({ text }: { text: string }) {
  return (
    <span className="inline-block overflow-hidden">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="animate-letter-pull inline-block"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}