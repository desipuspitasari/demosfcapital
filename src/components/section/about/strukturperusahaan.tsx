import strukturperusahaan from "../../../../public/images/strukturperusahaan.png";
import Image from "next/image";

const StrukturPerusahaan = () => {
  return (
    <div className="w-full rounded-lg  bg-white relative flex flex-col mt-20 drop-shadow-xl">
      <div className="text-blue-primary-500 font-open-sans font-bold text-[38px] text-center mt-5">
        Struktur Perusahaan
      </div>
      <div className="w-full max-h-[862px] max-w-[1116px]  relative">
        <Image src={strukturperusahaan} alt="" />
      </div>
    </div>
  );
};

export default StrukturPerusahaan;
