import { ArrowRightIcon } from "@heroicons/react/24/solid";

const ButtonArrow = () => {
  return (
    <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full ring-1 ring-black">
      <div className="absolute -left-1/2 flex h-6 w-12 -translate-x-1/4 items-center justify-center transition-all duration-300 group-hover:translate-x-1/4 ">
        <ArrowRightIcon className="h-6 w-6 p-1 text-black" />
        <ArrowRightIcon className="h-6 w-6 p-1 text-black" />
      </div>
    </div>
  );
};

export default ButtonArrow;
