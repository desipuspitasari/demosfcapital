import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

const KonsultasiCard: FC<{
  logo: any;
  title: string;
  content: string;
  href: any;
}> = ({ logo, title, content, href }) => {
  return (
    <Link
      href={href}
      className="relative flex aspect-square h-full w-full flex-col rounded-xl border bg-white p-4 shadow-xl"
    >
      <div className="relative w-full overflow-hidden rounded-2xl">
        <Image src={logo} height={48} alt="" className="mb-6" />
        <div className="mb-2 text-2xl font-black  text-blue-primary-500">
          {title}
        </div>
        <div className=" text-justify">{content}</div>
      </div>
    </Link>
  );
};
export default KonsultasiCard;
