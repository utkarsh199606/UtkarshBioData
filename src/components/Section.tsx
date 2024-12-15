import React from 'react';
import { AnimatedText } from './AnimatedText';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`bg-white rounded-lg shadow-md p-8 animate-slide-in ${className}`}>
      <h2 className="text-2xl font-semibold mb-6 text-purple-600">
        <AnimatedText text={title} />
      </h2>
      {children}
    </section>
  );
}