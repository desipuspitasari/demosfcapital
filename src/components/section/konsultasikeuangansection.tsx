import Link from "next/link";
import { FC } from "react";
import KonsultasiCard from "../konsultasicard";
import ButtonSecondary from "../../components/buttonsecondary";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import sekuritaslogo from "../../../public/images/logo/logo.png";
import dipaylogo from "../../../public/images/logo/dipaylogo.png";
import indofundlogo from "../../../public/images/logo/indofundlogo.png";
import pigijologo from "../../../public/images/logo/pigijologo.png";

const news = [
  {
    logo: sekuritaslogo,
    title: "PT Surya Fajar Sekuritas",
    content:
      "Perusahaan broker investasi yang menyediakan layanan penawaran umur perdana saham, Right Issue, Penerbitan Obligasi, Medium Term Notes serta kegiatan fund raising lainnya.",
  },

  {
    logo: indofundlogo,
    title: "PT. Bursa Akselerasi Indonesia",
    content:
      "Perusahaan yang bergerak dalam kegiatan pendanaan makro dan UMKM melalui platform P2P Lending. Adanya bisnis ini dengan tujuan untuk menjangkau, mengenal serta mengakselerasi setiap bisnis baik besar, sedang, hingga kecil.",
  },

  {
    logo: dipaylogo,
    title: "PT Mareco Prima Mandiri",
    content:
      "Dipay adalah produk uang elektronik milik PT. Mareco Prima Mandiri yang menyediakan layanan berbasis pembayaran elektronik. Dipay menjangkau seluruh masyarakat disektor 'unbanked', UMKM, serta pariwisata hanya dalam satu aplikasi.",
  },
  {
    logo: pigijologo,
    title: "PT Tourindo Guide Indonesia Tbk",
    content:
      "Pigijo merupakan sebagai sebuah Digital Tourism Marketplace, Pigijo mempertemukan penyedia produk wisata dengan traveler. Pigijo selalu memberikan paket terbaik, terbaru, unik, aman, dan harga yang bersaing.",
  },
];

const KonsultasiKeuanganSection: FC = () => {
  return (
    <section className="flex py-14 w-full flex-col bg-white">
      <div className="w-full max-w-6xl space-y-8 flex-col flex px-4 lg:px-0 mx-auto">
        <div className="flex w-full flex-col  ">
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
            direction="horizontal"
            className="flex w-full"
            spaceBetween={50}
            slidesPerView={3}
          >
            {news.map((i) => (
              <SwiperSlide key={i.title}>
                <KonsultasiCard
                  logo={i.logo}
                  title={i.title}
                  content={i.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default KonsultasiKeuanganSection;
