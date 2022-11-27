import Head from "next/head";
import { NextPage } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import ContactSection from "../components/section/contact/contactsection";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>SF Capital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContactSection />
      <Footer />
      <Navbar />
    </>
  );
};

export default Contact;
