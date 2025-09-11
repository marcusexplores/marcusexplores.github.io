import type { ReactNode } from 'react';

interface ContentSectionProps {
  children: ReactNode;
}

export const ContentSection = ({ children }: ContentSectionProps) => {
  return (
    <section className="py-20 px-4">
      {children}
    </section>
  );
}