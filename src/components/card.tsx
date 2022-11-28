import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import ButtonLink from "./linktext";

const Card: FC<{
  title: string;
  content: string;
  date: string;
  href: any;
  image: any;
}> = ({ title, content, date, href, image }) => {
  return (
    <div className="h-full w-full rounded-xl rounded-br-[70px] border bg-white p-4 pb-6 drop-shadow-xl ">
      <div className="relative  aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          fill
          src={image}
          alt=""
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="object-cover"
        />
      </div>
      <div className="text-2xl font-bold text-blue-primary-500">{title}</div>
      <div className="mt-2">{content}</div>
      <div className="mt-2 text-sm text-neutral-300">{date}</div>
      <div className="mt-2 flex py-2">
        <ButtonLink href={href}>Lihat Detailnya</ButtonLink>
      </div>
    </div>
  );
};
export default Card;
