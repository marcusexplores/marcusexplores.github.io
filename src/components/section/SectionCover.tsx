import type { ReactNode } from 'react';

interface SectionCoverProps {
  backgroundImage: string;
  children?: ReactNode;
}

export const SectionCover = ({ backgroundImage, children }: SectionCoverProps) => {
  return (
    <section
      className="h-96 bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${backgroundImage})`,
      }}
    >
      {children}
    </section>
  );
}