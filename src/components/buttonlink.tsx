import Link from "next/link";
import ButtonArrow from "./buttonarrow";

const ButtonLink = ({ href }: any) => {
  return (
    <Link
      href={href}
      className="flex justify-center items-center space-x-2 group "
    >
      <div className="">Button Secondary</div>
      <ButtonArrow />
    </Link>
  );
};

export default ButtonLink;
