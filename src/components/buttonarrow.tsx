import { ArrowRightIcon } from "@heroicons/react/24/solid";

const ButtonArrow = () => {
  return (
    <div className="relative flex w-6 h-6 items-center justify-center overflow-hidden rounded-full border-black border-2">
      <div className="absolute -left-3/4 flex h-6 w-12 items-center justify-center transition-all duration-300 -translate-x-1/4 hover:translate-x-1/4 ">
        <ArrowRightIcon className="h-6 w-6 p-1 text-black" />
        <ArrowRightIcon className="h-6 w-6 p-1 text-black" />
      </div>
    </div>
  );
};

export default ButtonArrow;
