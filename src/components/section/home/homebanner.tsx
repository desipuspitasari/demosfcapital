import Link from "next/link";
import homebanner from "../../../../public/images/homebanner.png";
import homebanner2 from "../../../../public/images/homebanner2.png";
import Image from "next/image";
import ButtonSecondary from "../../linkbtnsecondary";
import { FC } from "react";

const HomeBanner: FC = () => {
  return (
    <>
      <section className="flex w-full flex-col bg-white pt-32 pb-16">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:px-0">
          <div className="order-last flex flex-col justify-center text-justify font-open-sans  text-blue-primary-500 md:order-first">
            <div className="mb-4 text-[32px] font-bold">Who We Are</div>
            <div>
              PT Surya Fajar Capital Tbk adalah perusahaan investasi dengan
              keahlian serta pengalaman di Indonesia dengan perjalanan yang kuat
              dalam menganalisa, menciptakan, dan mengembangkan
              perusahaan-perusahaan unggulan.
            </div>
          </div>
          <div className="max-h-[546px] max-w-[546px] justify-self-end overflow-hidden rounded-xl rounded-tl-[120px]">
            <Image src={homebanner} alt="" />
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col bg-white pb-32 pt-16">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:px-0">
          <div className="max-h-[546px] max-w-[546px] overflow-hidden rounded-xl rounded-br-[120px]">
            <Image src={homebanner2} alt="" />
          </div>
          <div className="flex flex-col justify-center text-justify  font-open-sans text-blue-primary-500">
            <div className="mb-4 text-[32px] font-bold">What We Do</div>
            <div className="mb-4">
              Fokus kami pada jasa konsultasi keuangan serta berinvestsai pada
              perusahaan yang memiliki potensi pertumbuhan dengan meningkatkan
              nilai perusahaan tersebut melalui sinergi dan dukungan manajemen
              secara aktif dan profesional.
            </div>
            <div>
              Selain itu, PT Surya Fajar Capital Tbk juga menyediakan sumber
              daya internal yang memiliki kualitas yang tinggi pada bidang
              keuangan, manajemen serta pemasaran guna mendukung kemajuan
              perusahaan. PT Surya Fajar Capital Tbk memiliki pengalaman yang
              solid dalam mengembangkan bisnis perusahaan secara aktif.
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col bg-opacity-20 bg-noise1 bg-cover py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 lg:px-0">
          <div className="flex flex-col justify-center text-justify font-open-sans text-white">
            <div className="mb-4 text-[32px] font-bold">Industry Strategy</div>
            <div className="mb-5">
              Kami percaya bahwa Indonesia memiliki peluang untuk mengembangkan
              potensi dalam dunia investasi kedepannya. PT Surya Fajar Capital
              memiliki instruksi investasi yang luas dan fleksibel. Kami
              memfokuskan untuk membantu mengembangkan ekonomi ke beberapa
              sektor-sektor yang kami yakini dapat memanfaatkan pengalaman
              mendalam dan hubungan jangka panjang.
            </div>
            <div className="mb-5 border-b border-white pb-5">
              PT Surya Fajar Capital memanfaatkan peluang secara optimal dalam
              duniai investasi, terutama melalui para professional dan
              eksekutif. Bersama-sama dengan mitra bisnis, PT Surya Fajar
              Capital siap mendukung pertumbuhan ekonomi Indonesia dengan
              membantu membuka peluang bagi para investor dalam mengembangkan
              bisnis melalui pengembangan produk, memperluas strategi bisnis
              serta memberikan akses untuk sumber modal baru. PT Surya Fajar
              Capital. Tbk mempunyai sumber daya manusia yang mumpuni, mampu
              mengidentifikasi potensi usaha suatu perusahaan agar dapat
              berkembang lebih maksimal.
            </div>
            <div className="mb-4 text-[32px] font-bold">Industry Expertise</div>
            <div className="mb-5">
              Kami berupaya dalam membantu perusahaan untuk mewujudkan potensi
              pertumbuhan mereka. Kami percaya dalam keahlian profesional tim
              kami mampu berkolaborasi erat dengan mitra kami termasuk
              pengusaha, substansi pemerintah serta tim manajemen di perusahaan
              yang terdapat dalam portofolio kami.
            </div>
            <div className="self-end">
              <ButtonSecondary href="#">Lihat Detail</ButtonSecondary>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
