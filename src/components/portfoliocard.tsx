import { FC } from "react";
import Image from "next/image";
import ButtonLink from "./linktext";

const PortfolioCard: FC<{
  image: any;
  href: any;
  title: string;
  content: string;
  bgcolor?: string;
  logo: any;
}> = ({ image, href, title, content, bgcolor, logo }) => {
  return (
    <div
      className={`relative flex aspect-[7/12] max-w-[400px] flex-col justify-end overflow-hidden rounded-2xl rounded-tr-[100px] drop-shadow-xl ${bgcolor}`}
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-contain object-top"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <div className="relative inset-x-0 bottom-0 z-0 flex aspect-square w-full flex-col rounded-xl bg-white p-6">
        <Image
          src={logo}
          height={48}
          alt=""
          className="mb-6"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <div className="mb-2 text-2xl font-bold">{title}</div>
        <div className="">{content}</div>
        <div className="mt-auto self-start">
          <ButtonLink href={href}>Lihat Detailnya</ButtonLink>
        </div>
      </div>
    </div>
  );
};

PortfolioCard.defaultProps = {
  bgcolor: "bg-blue-500",
};

export default PortfolioCard;
