import Link from "next/link";
import ButtonArrow from "./buttonarrow";
import { FC } from "react";
import { ReactNode } from "react";

const LinkText: FC<{
  href: any;
  children: ReactNode;
}> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group flex items-center justify-center space-x-2 "
    >
      <div className="">{children}</div>
      <ButtonArrow />
    </Link>
  );
};

export default LinkText;
