import Link from "next/link";
import ButtonArrow from "./buttonarrow";
import { FC } from "react";
import { ReactNode } from "react";

const ButtonLink = ({ href, children }: { href: any; children: ReactNode }) => {
  return (
    <Link
      href={href}
      className="flex justify-center items-center space-x-2 group "
    >
      <div className="">{children}</div>
      <ButtonArrow />
    </Link>
  );
};

export default ButtonLink;
