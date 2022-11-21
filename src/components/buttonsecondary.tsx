import Link from "next/link";
import ButtonArrow from "./buttonarrow";

const ButtonSecondary = ({ href }: any) => {
  return (
    <Link
      href={href}
      className="bg-white space-x-2 font-open-sans text-base flex px-6 py-4 w-[262px] max-w-[262px] text-black group justify-center  rounded-full "
    >
      <div className="">Button Secondary</div>
      <ButtonArrow />
    </Link>
  );
};

export default ButtonSecondary;
