import { FiArrowUpRight } from "react-icons/fi";

const BtnSecondary = ({ children, ...props }: any) => {
  return (
    <button
      {...props}
      className="group flex w-[262px] max-w-[262px] justify-center space-x-2 rounded-full bg-white px-6 py-4 font-open-sans text-base  text-black drop-shadow-xl"
    >
      <div className="">{children}</div>
      <FiArrowUpRight className="h-0 w-0 transition-all group-hover:h-4 group-hover:w-4 group-hover:transition-all group-focus:h-0 group-focus:w-0" />
    </button>
  );
};

export default BtnSecondary;
