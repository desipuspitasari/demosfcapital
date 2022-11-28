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
    <div className="mb-6 bg-white">
      <div className="relative">
        <Image src={image} alt="" />
      </div>
      <div className="pl-6 text-2xl font-semibold text-blue-primary-500">
        {name}
      </div>
      <div className="mt-2 pl-6 text-blue-primary-500">{content}</div>
    </div>
  );
};
export default ManajemenCard;
