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
      className="self-start after:block after:h-[1px] after:w-0 after:bg-black after:transition-all after:content-[''] after:hover:w-full"
    >
      {children}
    </Link>
  );
};

export default NavItem;
