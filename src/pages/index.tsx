import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import ButtonPrimary from "../components/buttonprimary";
import ButtonOutline from "../components/buttonoutline";
import ButtonArrow from "../components/buttonarrow";
import ButtonSecondary from "../components/buttonsecondary";
import ButtonLink from "../components/buttonlink";
import Footer from "../components/footer/footer";
import HomeBanner from "../components/banner/homebanner";
import NewsSection from "../components/section/newssection";
import ProfilePerusahaan from "../components/banner/profileperusahaan";
import KonsultasiKeuanganSection from "../components/section/konsultasikeuangansection";

export default function Home() {
  return (
    <div className="overflow-hidden antialiased">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-full bg-[#005eeead]">
        <Navbar />
        <section className="py-20 flex flex-col h-full w-full">
          <ButtonPrimary href="#">Button Primary</ButtonPrimary>
          <ButtonOutline href="#"> Button Outline</ButtonOutline>
          <ButtonSecondary href="#">Button Secondary</ButtonSecondary>
          <ButtonLink href="#">Button Link</ButtonLink>
          <HomeBanner />
          <NewsSection />
          <ProfilePerusahaan />
          <KonsultasiKeuanganSection />
          <ButtonPrimary href="#_">Button Primary</ButtonPrimary>
          <Footer />
        </section>
      </main>
    </div>
  );
}
