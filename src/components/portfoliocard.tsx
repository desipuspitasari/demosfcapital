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
      className={`max-w-[400px] aspect-[7/12] rounded-2xl rounded-tr-[100px] flex flex-col justify-end drop-shadow-xl overflow-hidden relative ${bgcolor}`}
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
      <div className="aspect-square w-full rounded-xl bg-white p-6 flex-col flex bottom-0 inset-x-0 z-0 relative">
        <Image
          src={logo}
          height={48}
          alt=""
          className="mb-6"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <div className="font-bold text-2xl mb-2">{title}</div>
        <div className="">{content}</div>
        <div className="self-start mt-auto">
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
