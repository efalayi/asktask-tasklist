import { PropsWithChildren } from 'react';

interface NavbarProps {}

const Navbar = (props: PropsWithChildren<NavbarProps>) => {
  return <nav className="flex flex-row gap-x-2">{props.children}</nav>;
};

export default Navbar;
