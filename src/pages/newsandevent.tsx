import Head from "next/head";
import { NextPage } from "next";

import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import NEContentSection from "../components/section/newsandevent/necontentsection";

const NewsAndEvent: NextPage = () => {
  return (
    <>
      <Head>
        <title>SF Capital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NEContentSection />
      <Footer />
      <Navbar />
    </>
  );
};

export default NewsAndEvent;
