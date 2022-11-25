import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import ButtonLink from "./linktext";

const ManajemenCard: FC<{
  image: any;
  name: string;
  content: string;
}> = ({ image, name, content }) => {
  return (
    <div className="bg-white pb-6  ">
      <div className="w-full max-h-[180px] max-w-[356px] aspect-square relative">
        <Image fill src={image} alt="" />
      </div>
      <div className="text-blue-primary-500 text-2xl pl-6 font-semibold">
        {name}
      </div>
      <div className="mt-2 text-blue-primary-500 pl-6">{content}</div>
    </div>
  );
};
export default ManajemenCard;
