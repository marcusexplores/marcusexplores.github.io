interface NavigationMenuBackdropProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const NavigationMenuBackdrop = ({ onClick, children }: NavigationMenuBackdropProps) => {
  return (
    <div
    onClick={onClick}
    className="fixed inset-0 z-30 lg:hidden"
    aria-hidden="true"
  >
    { children }
  </div>
  )
}