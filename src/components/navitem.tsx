import Link from "next/link";

const NavItem = ({ href }: any) => {
  return (
    <Link
      href={href}
      className="after:content-[''] after:h-[1px] after:bg-black after:w-0 after:block after:hover:w-full after:transition-all"
    >
      Nav Item
    </Link>
  );
};

export default NavItem;
