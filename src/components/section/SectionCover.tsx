type SectionCoverProps = React.ComponentProps<"section"> & {
  backgroundImage: string;
};

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