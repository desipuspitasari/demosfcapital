import Link from "next/link";
import ButtonArrow from "./buttonarrow";
import { FC } from "react";
import { ReactNode } from "react";

const ButtonSecondary: FC<{ href: any; children: ReactNode }> = ({
  href,
  children,
}: any) => {
  return (
    <Link
      href={href}
      className="bg-white space-x-2 font-open-sans text-base flex px-6 py-4 w-[262px] max-w-[262px] text-black group justify-center  rounded-full drop-shadow-xl"
    >
      <div className="">{children}</div>
      <ButtonArrow />
    </Link>
  );
};

export default ButtonSecondary;
