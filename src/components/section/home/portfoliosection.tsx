import { FC } from "react";
import PortfolioCard from "../../portfoliocard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import sekuritasbg from "../../../../public/images/sekuritas.webp";
import dipaybg from "../../../../public/images/dipay.webp";
import indofundbg from "../../../../public/images/indofund.webp";
import pigijobg from "../../../../public/images/pigijo.webp";

import sekuritaslogo from "../../../../public/images/logo/logo.png";
import dipaylogo from "../../../../public/images/logo/dipaylogo.png";
import indofundlogo from "../../../../public/images/logo/indofundlogo.png";
import pigijologo from "../../../../public/images/logo/pigijologo.png";

const item = [
  {
    title: "PT Surya Fajar Sekuritas",
    content:
      "Merupakan perusahaan sekuritas bergerak dalam bidang investasi pasar modal bagi ritel maupun korporasi",
    bgcolor: "bg-blue-500",
    image: sekuritasbg,
    href: "#_",
    logo: sekuritaslogo,
  },
  {
    title: "PT Mareco Prima Mandiri",
    content:
      "Merupakan perusahaan Fintech yang bergerak dalam sistem pembayaran elektronik/(e-wallet)",
    bgcolor: "bg-sky-500",
    image: dipaybg,
    href: "#_",
    logo: dipaylogo,
  },
  {
    title: "PT. Bursa Akselerasi Indonesia",
    content: "Merupakan perusahaan yang bergerak dalam bidang P2P Lending.",
    bgcolor: "bg-orange-500",
    image: indofundbg,
    href: "#_",
    logo: indofundlogo,
  },
  {
    title: "PT Tourindo Guide Indonesia Tbk",
    content:
      "Perusahaan startup teknologi di bidang pariwisata, yang resmi melantai di Papan Akselerasi PT Bursa Efek lndonesia. Pigijo bercita-cita menjadi marketplace Desa Wisata terbesar di Indonesia.",
    bgcolor: "bg-rose-500",
    image: pigijobg,
    href: "#_",
    logo: pigijologo,
  },
];

const PortfolioSection: FC = () => {
  return (
    <section className="flex w-full flex-col bg-[#F1F1F1] py-16 px-2">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <div className="mb-2 w-full text-center text-[32px] font-bold text-blue-primary-500">
          Portfolio
        </div>
        <div className="text-center">
          Dalam waktu kurang dari satu tahun sejak didirikan, SF Capital telah
          dianugerahi banyak mandat dari berbagai klien - beberapa di antaranya
          menjadi pemain kunci dalam industri ini.
        </div>
        <Swiper
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          direction="horizontal"
          spaceBetween={50}
          slidesPerView={3}
          className="w-full !py-6 !px-4"
          pagination={{
            clickable: true,
            el: "#swiper-bullet-protfolio",
            type: "bullets",
            bulletClass: "swiper-bullet",
            bulletActiveClass: "swiper-bullet-active",
          }}
        >
          {item.map((i) => (
            <SwiperSlide key={i.title}>
              <PortfolioCard
                image={i.image}
                title={i.title}
                href={i.href}
                logo={i.logo}
                content={i.content}
                bgcolor={i.bgcolor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="flex w-full justify-center space-x-2"
          id="swiper-bullet-protfolio"
        ></div>
      </div>
    </section>
  );
};

export default PortfolioSection;
