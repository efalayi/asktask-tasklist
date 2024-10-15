import { PropsWithChildren } from 'react';

const Navbar = ({ children }: PropsWithChildren) => {
  return <nav className="flex flex-row gap-x-2">{children}</nav>;
};

export default Navbar;
