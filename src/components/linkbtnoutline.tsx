import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FC } from "react";
import { ReactNode } from "react";

const LinkBtnOutline: FC<{ href: any; children: ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className="border-white border-[1px] font-open-sans text-base flex px-6 py-4 w-[262px] max-w-[262px] text-white group justify-center rounded-full"
    >
      <div className="group-focus:border-b group-focus:border-white  ">
        {children}
      </div>
      <FiArrowUpRight className="w-0 h-0 group-hover:w-4 group-hover:h-4 group-hover:transition-all group-focus:w-0 group-focus:h-0 transition-all" />
    </Link>
  );
};

export default LinkBtnOutline;
