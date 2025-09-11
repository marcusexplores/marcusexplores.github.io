import type { ReactNode } from 'react';

interface CoverSectionProps {
  backgroundImage: string;
  children?: ReactNode;
}

export const CoverSection = ({ backgroundImage, children }: CoverSectionProps) => {
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