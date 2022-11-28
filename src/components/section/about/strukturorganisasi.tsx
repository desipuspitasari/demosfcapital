import strukturorganisasi from "../../../../public/images/strukturorganisasi.png";
import Image from "next/image";

const StrukturOrganisasi = () => {
  return (
    <div className="relative mt-20 flex w-full flex-col rounded-2xl bg-white drop-shadow-xl">
      <div className="mt-5 text-center font-open-sans text-[38px] font-bold text-blue-primary-500">
        Struktur Organisasi
      </div>
      <Image src={strukturorganisasi} alt="" />
    </div>
  );
};

export default StrukturOrganisasi;
