import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

const KonsultasiCard: FC<{
  logo: any;
  title: string;
  content: string;
}> = ({ logo, title, content }) => {
  return (
    <div className="bg-white pb-6 h-full border p-4 rounded-xl  drop-shadow-xl w-full ">
      <div className="w-full  overflow-hidden rounded-2xl  aspect-square relative">
        <Image src={logo} height={48} alt="" className="mb-6" />
        <div className="text-blue-primary-500 text-2xl mb-2  font-black">
          {title}
        </div>
        <div className=" text-justify">{content}</div>
      </div>
    </div>
  );
};
export default KonsultasiCard;
