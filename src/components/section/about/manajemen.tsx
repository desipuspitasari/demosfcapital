import strukturorganisasi from "../../../../public/images/strukturorganisasi.png";
import Image from "next/image";

const Manajemen = () => {
  return (
    <div className="w-full rounded-2xl bg-white relative flex flex-col mt-20 drop-shadow-xl">
      <div className="text-blue-primary-500 font-open-sans font-bold text-[38px] text-center mt-5">
        Struktur Organisasi
      </div>
      <Image src={strukturorganisasi} alt="" />
    </div>
  );
};

export default Manajemen;
