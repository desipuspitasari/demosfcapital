import { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import PSContentSection from "../components/section/productsandservices/pscontentsection";

const ProductAndServices: NextPage = () => {
  return (
    <div className="bg-noise2 bg-cover bg-no-repeat">
      <Head>
        <title>SF Capital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PSContentSection />
      <Footer />
      <Navbar />
    </div>
  );
};

export default ProductAndServices;
