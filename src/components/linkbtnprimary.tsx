import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FC, MouseEventHandler } from "react";
import { ReactNode } from "react";

const LinkBtnPrimary: FC<{
  href?: any;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}> = ({ href, children, onClick }) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className="group flex w-[262px] max-w-[262px] justify-center rounded-full bg-blue-primary-500 px-6 py-4 font-open-sans text-base text-white "
    >
      <div className="group-focus:border-b group-focus:border-white  ">
        {children}
      </div>
      <FiArrowUpRight className="h-0 w-0 transition-all group-hover:h-4 group-hover:w-4 group-hover:transition-all group-focus:h-0 group-focus:w-0" />
    </Link>
  );
};

LinkBtnPrimary.defaultProps = {
  href: "#_",
};

export default LinkBtnPrimary;
