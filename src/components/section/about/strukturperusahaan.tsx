import strukturperusahaan from "../../../../public/images/strukturperusahaan.png";
import Image from "next/image";

const StrukturPerusahaan = () => {
  return (
    <div className="relative mt-20  flex w-full flex-col rounded-lg bg-white drop-shadow-xl">
      <div className="mt-5 text-center font-open-sans text-[38px] font-bold text-blue-primary-500">
        Struktur Perusahaan
      </div>
      <div className="relative max-h-[862px] w-full  max-w-[1116px]">
        <Image src={strukturperusahaan} alt="" />
      </div>
    </div>
  );
};

export default StrukturPerusahaan;
