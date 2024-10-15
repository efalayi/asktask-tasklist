'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  href: string;
  title: string;
}

const NavItem = ({ href, title }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={`rounded-md px-3 py-2 text-sm font-medium capitalize text-gray-300 hover:bg-gray-700 hover:text-white ${pathname === href ? 'bg-gray-900 text-blue-300' : ''}`}
      href={href}>
      {title}
    </Link>
  );
};

export default NavItem;
