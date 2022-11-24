import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import ButtonLink from "../components/buttonlink";

const Card: FC<{
  title: string;
  content: string;
  date: string;
  href: any;
  image: any;
}> = ({ title, content, date, href, image }) => {
  return (
    <div className="bg-white pb-6 h-full border p-4 rounded-xl rounded-br-[70px] drop-shadow-xl w-full ">
      <div className="w-full  overflow-hidden rounded-2xl aspect-square relative">
        <Image fill src={image} alt="" />
      </div>
      <div className="text-blue-primary-500 text-2xl font-black">{title}</div>
      <div className="mt-2">{content}</div>
      <div className="text-sm text-neutral-300 mt-2">{date}</div>
      <div className="py-2 mt-2 flex">
        <ButtonLink href={href}>Lihat Detailnya</ButtonLink>
      </div>
    </div>
  );
};
export default Card;
