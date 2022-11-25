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
      className="flex justify-center items-center space-x-2 group "
    >
      <div className="">{children}</div>
      <ButtonArrow />
    </Link>
  );
};

export default LinkText;
