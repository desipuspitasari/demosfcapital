import { FC } from "react";
import KonsultasiKeuanganSection from "./konsultasikeuangansection";

const PSContentSection: FC = () => {
  return (
    <>
      <section className="w-full max-h-[500px] min-h-[500px] flex flex-col justify-end bg-productsandservices bg-cover bg-no-repeat bg-center px-2">
        <div className="max-w-6xl w-full mx-auto mb-20">
          <div className="text-[40px] text-white font-bold">
            Produk & Layanan
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen px-2">
        <div className="w-full max-w-6xl mx-auto flex flex-col py-20">
          <div className="text-center text-white text-[32px] font-bold mb-2">
            Industry Expertise
          </div>
          <div className="text-white text-justify mb-10">
            Kami berupaya dalam membantu perusahaan untuk mewujudkan potensi
            pertumbuhan mereka. Kami percaya dalam keahlian profesional tim kami
            mampu berkolaborasi erat dengan mitra kami termasuk pengusaha,
            substansi pemerintah serta tim manajemen di perusahaan yang terdapat
            dalam portofolio kami.
          </div>
          <div className="text-white text-center mb-6">
            Saat ini kami tengah mengembangkan 2 kegiatan aktivitas utama, yakni
            konsultasi keuangan dan investasi.
          </div>
          <div className="px-4 py-8 bg-white rounded-xl flex flex-col mb-8">
            <div className="text-2xl text-blue-primary-500 mb-4 font-bold">
              Konsultasi Keuangan
            </div>
            <p className="mb-2">
              Layanan konsultasi keuangan yang menyediakan dan memberikan saran
              terkait transaksi strategis seperti merger dan akuisisi,
              divestasi, restrukturisasi dalam konteks persiapan Penawaran Umum
              Perdana (IPO).
            </p>
            <p>
              Selain itu, kami juga memberikan berbagai layanan keuangan
              menyeluruh yang melalui anak usaha kami, yakni:
            </p>
          </div>
          <KonsultasiKeuanganSection />
          <div className="px-4 py-8 bg-white rounded-xl flex flex-col my-8">
            <div className="text-2xl text-blue-primary-500 mb-4 font-bold">
              Kegiatan Investasi
            </div>
            <p className="mb-2">
              Kami memanfaatkan peluang secara optimal guna mengupayakan imbal
              hasil maksimal bagi pemegang saham atas realisasi investasi kami.
              Penyertaan terhadap perusahaan asosiasi dan investasi dengan
              mendirikan atau mengakuisisi unit-unit usaha yang dapat
              dikendalikan sepenuhnya.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PSContentSection;
