import type { ReactNode } from 'react';

interface SectionContentProps {
  children: ReactNode;
}

export const SectionContent = ({ children }: SectionContentProps) => {
  return (
    <section className="py-20 px-4">
      {children}
    </section>
  );
}