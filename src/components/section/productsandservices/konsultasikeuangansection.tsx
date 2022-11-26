import { FC } from "react";
import KonsultasiCard from "../../konsultasicard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

import sekuritaslogo from "../../../../public/images/logo/logo.png";
import dipaylogo from "../../../../public/images/logo/dipaylogo.png";
import indofundlogo from "../../../../public/images/logo/indofundlogo.png";
import pigijologo from "../../../../public/images/logo/pigijologo.png";

const news = [
  {
    logo: sekuritaslogo,
    title: "PT Surya Fajar Sekuritas",
    content:
      "Perusahaan broker investasi yang menyediakan layanan penawaran umur perdana saham, Right Issue, Penerbitan Obligasi, Medium Term Notes serta kegiatan fund raising lainnya.",
    href: "#_",
  },

  {
    logo: indofundlogo,
    title: "PT. Bursa Akselerasi Indonesia",
    content:
      "Perusahaan yang bergerak dalam kegiatan pendanaan makro dan UMKM melalui platform P2P Lending. Adanya bisnis ini dengan tujuan untuk menjangkau, mengenal serta mengakselerasi setiap bisnis baik besar, sedang, hingga kecil.",
    href: "#_",
  },

  {
    logo: dipaylogo,
    title: "PT Mareco Prima Mandiri",
    content:
      "Dipay adalah produk uang elektronik milik PT. Mareco Prima Mandiri yang menyediakan layanan berbasis pembayaran elektronik. Dipay menjangkau seluruh masyarakat disektor 'unbanked', UMKM, serta pariwisata hanya dalam satu aplikasi.",
    href: "#_",
  },
  {
    logo: pigijologo,
    title: "PT Tourindo Guide Indonesia Tbk",
    content:
      "Pigijo merupakan sebagai sebuah Digital Tourism Marketplace, Pigijo mempertemukan penyedia produk wisata dengan traveler. Pigijo selalu memberikan paket terbaik, terbaru, unik, aman, dan harga yang bersaing.",
    href: "#_",
  },
];

const KonsultasiKeuanganSection: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Swiper
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
        modules={[Pagination]}
        direction="horizontal"
        className="flex w-full"
        spaceBetween={50}
        slidesPerView={3}
        pagination={{
          el: "#konsultasi-pagination",
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active",
          clickable: true,
        }}
      >
        {news.map((i) => (
          <SwiperSlide key={i.title}>
            <KonsultasiCard
              href={i.href}
              logo={i.logo}
              title={i.title}
              content={i.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="w-full justify-center space-x-2 flex mt-4 pb-8 border-b border-white"
        id="konsultasi-pagination"
      ></div>
    </div>
  );
};

export default KonsultasiKeuanganSection;
