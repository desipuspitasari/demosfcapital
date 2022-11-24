import { FC } from "react";
import Image from "next/image";
import sekuritaslogo from "../../public/images/logo/logo.png";
import ButtonLink from "./buttonlink";

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
      className={`max-w-[400px] aspect-[7/12] bg-cover bg-no-repeat bg-center rounded-2xl rounded-tr-[100px] flex flex-col justify-end drop-shadow-xl ${image} ${bgcolor}`}
    >
      <div className="aspect-square rounded-xl bg-white p-6 flex-col flex">
        <Image src={logo} height={48} alt="" className="mb-6" />
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
