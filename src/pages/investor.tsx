import Head from "next/head";
import { NextPage } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import InvContentSection from "../components/section/investor/invcontentsection";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>SF Capital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <InvContentSection />
      <Footer />
      <Navbar />
    </>
  );
};

export default About;
