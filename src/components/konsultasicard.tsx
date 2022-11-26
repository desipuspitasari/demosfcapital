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
      className="bg-white h-full border p-4 rounded-xl aspect-square shadow-xl w-full relative flex flex-col"
    >
      <div className="w-full overflow-hidden rounded-2xl relative">
        <Image src={logo} height={48} alt="" className="mb-6" />
        <div className="text-blue-primary-500 text-2xl mb-2  font-black">
          {title}
        </div>
        <div className=" text-justify">{content}</div>
      </div>
    </Link>
  );
};
export default KonsultasiCard;
