import Link from "next/link";
import ButtonArrow from "./buttonarrow";
import { FC } from "react";
import { ReactNode } from "react";

const LinkBtnSecondary: FC<{ href: any; children: ReactNode }> = ({
  href,
  children,
}: any) => {
  return (
    <Link
      href={href}
      className="group flex w-[262px] max-w-[262px] justify-center space-x-2 rounded-full bg-white px-6 py-4 font-open-sans text-base  text-black drop-shadow-xl"
    >
      <div className="">{children}</div>
      <ButtonArrow />
    </Link>
  );
};

export default LinkBtnSecondary;
