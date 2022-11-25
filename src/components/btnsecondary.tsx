import { FiArrowUpRight } from "react-icons/fi";

const BtnSecondary = ({ children, ...props }: any) => {
  return (
    <button
      {...props}
      className="bg-white space-x-2 font-open-sans text-base flex px-6 py-4 w-[262px] max-w-[262px] text-black group justify-center  rounded-full drop-shadow-xl"
    >
      <div className="">{children}</div>
      <FiArrowUpRight className="w-0 h-0 group-hover:w-4 group-hover:h-4 group-hover:transition-all group-focus:w-0 group-focus:h-0 transition-all" />
    </button>
  );
};

export default BtnSecondary;
