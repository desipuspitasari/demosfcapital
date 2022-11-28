import { FC } from "react";
import KonsultasiKeuanganSection from "./konsultasikeuangansection";

const PSContentSection: FC = () => {
  return (
    <>
      <section className="flex max-h-[500px] min-h-[500px] w-full flex-col justify-end bg-productsandservices bg-cover bg-center bg-no-repeat px-2">
        <div className="mx-auto mb-20 w-full max-w-6xl">
          <div className="text-[40px] font-bold text-white">
            Produk & Layanan
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full px-2">
        <div className="mx-auto flex w-full max-w-6xl flex-col py-20">
          <div className="mb-2 text-center text-[32px] font-bold text-white">
            Industry Expertise
          </div>
          <div className="mb-10 text-justify text-white">
            Kami berupaya dalam membantu perusahaan untuk mewujudkan potensi
            pertumbuhan mereka. Kami percaya dalam keahlian profesional tim kami
            mampu berkolaborasi erat dengan mitra kami termasuk pengusaha,
            substansi pemerintah serta tim manajemen di perusahaan yang terdapat
            dalam portofolio kami.
          </div>
          <div className="mb-6 text-center text-white">
            Saat ini kami tengah mengembangkan 2 kegiatan aktivitas utama, yakni
            konsultasi keuangan dan investasi.
          </div>
          <div className="mb-8 flex flex-col rounded-xl bg-white px-4 py-8">
            <div className="mb-4 text-2xl font-bold text-blue-primary-500">
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
          <div className="my-8 flex flex-col rounded-xl bg-white px-4 py-8">
            <div className="mb-4 text-2xl font-bold text-blue-primary-500">
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
