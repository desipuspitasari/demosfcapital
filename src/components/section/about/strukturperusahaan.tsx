import strukturperusahaan from "../../../../public/images/strukturperusahaan.png";
import Image from "next/image";

const StrukturPerusahaan = () => {
  return (
    <div className="w-full rounded-xl relative flex flex-col">
      <div>Struktur</div>
      <Image src={strukturperusahaan} alt="" />
    </div>
  );
};

export default StrukturPerusahaan;
