import Head from "next/head";
import HomeBanner from "../components/banner/homebanner";
import { NextPage } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import HomeHeroSection from "../components/homeherosection";
import PortfolioSection from "../components/section/portfoliosection";
import NewsSection from "../components/section/newssection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SF Capital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeHeroSection />
      <HomeBanner />
      <PortfolioSection />
      <NewsSection />
      <Footer />
      <Navbar />
    </>
  );
};

export default Home;
