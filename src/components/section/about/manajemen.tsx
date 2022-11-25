import Head from "next/head";
import { NextPage } from "next";
import Image from "next/image";
import ManajemenCard from "../../../components/manajemencard";
import manajemen1 from "../../../../public/images/manajemen1.png";
import manajemen2 from "../../../../public/images/manajemen2.png";
import manajemen3 from "../../../../public/images/manajemen3.png";

const news = [
  {
    image: manajemen1,
    name: "Harun Pandapotan",
    content: "Komisaris Utama merangkap Komisaris Independen.",
  },
  {
    image: manajemen2,
    name: "Steffen Fang",
    content: "Direktur Utama",
  },
  {
    image: manajemen3,
    name: "Hevy Yafanny (Fanny)",
    content: "Direktur",
  },
];

const Manajemen = () => {
  return (
    <>
      <section className="w-full bg-white relative flex flex-col mt-20 ">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 lg:px-0">
          {news.map((i) => (
            <ManajemenCard
              key={i.name}
              image={i.image}
              name={i.name}
              content={i.content}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Manajemen;
