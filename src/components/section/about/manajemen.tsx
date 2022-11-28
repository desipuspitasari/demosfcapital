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
      <section className="relative mt-20 flex w-full flex-col bg-white ">
        <div className="flex flex-col justify-center text-center  font-open-sans text-blue-primary-500">
          <div className="mb-4 text-[32px] font-bold">Manajemen</div>
        </div>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
