import Link from "next/link";
import { ReactNode } from "react";
import { FC } from "react";

const NavItem: FC<{ href: any; children: ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className="after:content-[''] after:h-[1px] after:bg-black after:w-0 after:block after:hover:w-full after:transition-all self-start"
    >
      {children}
    </Link>
  );
};

export default NavItem;
