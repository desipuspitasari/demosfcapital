import { FC } from "react";
import PortfolioCard from "../portfoliocard";

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
    <section className="lex pt-32 pb-16 w-full flex-col bg-white">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 mx-auto px-4 lg:px-0 place-content-center place-items-center">
        {item.map((i) => (
          <PortfolioCard
            key={i.title}
            title={i.title}
            content={i.content}
            bgcolor={i.bgcolor}
            image={i.image}
            href={i.href}
            logo={i.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
