import { FC } from "react";
import PortfolioCard from "../portfoliocard";
import { Swiper, SwiperSlide } from "swiper/react";

import sekuritaslogo from "../../../public/images/logo/logo.png";
import dipaylogo from "../../../public/images/logo/dipaylogo.png";
import indofundlogo from "../../../public/images/logo/indofundlogo.png";
import pigijologo from "../../../public/images/logo/pigijologo.png";

const item = [
  {
    title: "PT Surya Fajar Sekuritas",
    content:
      "Merupakan perusahaan sekuritas bergerak dalam bidang investasi pasar modal bagi ritel maupun korporasi",
    bgcolor: "bg-blue-500",
    image: "bg-sekuritas",
    href: "#",
    logo: sekuritaslogo,
  },
  {
    title: "PT Mareco Prima Mandiri",
    content:
      "Merupakan perusahaan Fintech yang bergerak dalam sistem pembayaran elektronik/(e-wallet)",
    bgcolor: "bg-sky-500",
    image: "bg-dipay",
    href: "#",
    logo: dipaylogo,
  },
  {
    title: "PT. Bursa Akselerasi Indonesia",
    content: "Merupakan perusahaan yang bergerak dalam bidang P2P Lending.",
    bgcolor: "bg-orange-500",
    image: "bg-indofund",
    href: "#",
    logo: indofundlogo,
  },
  {
    title: "PT Tourindo Guide Indonesia Tbk",
    content:
      "Perusahaan startup teknologi di bidang pariwisata, yang resmi melantai di Papan Akselerasi PT Bursa Efek lndonesia. Pigijo bercita-cita menjadi marketplace Desa Wisata terbesar di Indonesia.",
    bgcolor: "bg-rose-500",
    image: "bg-pigijo",
    href: "#",
    logo: pigijologo,
  },
];

const PortfolioSection: FC = () => {
  return (
    <section className="flex pt-32 pb-16 w-full flex-col bg-[#F1F1F1]">
      <div className="w-full flex max-w-6xl  mx-auto px-4  lg:px-0 ">
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
          spaceBetween={50}
          slidesPerView={3}
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
      </div>
    </section>
  );
};

export default PortfolioSection;
