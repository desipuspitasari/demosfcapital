import logo from "../../public/images/logo/logo.png";
import Image from "next/image";
import NavItem from "./footer/navitem";
import Link from "next/link";
import SwicthLanguage from "./switchlanguage";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navlist = [
  { name: "Tentang Kami", href: "about" },
  { name: "Produk & layanan", href: "productsandservices" },
  { name: "Berita & Kegiatan", href: "newsandevent" },
  { name: "Hubungan Investor", href: "investor" },
  { name: "Kontak", href: "contact" },
];

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 10,
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);
  return (
    <>
      <div className="fixed top-4 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center px-2 lg:px-0">
        <div className="hidden w-full max-w-6xl items-center justify-between space-x-10 rounded-full border bg-white p-4 px-8 py-4 font-semibold drop-shadow-lg lg:flex">
          <div className="flex items-center justify-center space-x-2">
            <Link href="/" className="flex flex-wrap items-center space-x-2">
              <Image src={logo} height={48} width={48} alt="" />
              <div className="font-poppins text-[22px] font-bold text-blue-primary-400">
                CAPITAL
              </div>
            </Link>
          </div>
          <div className="flex space-x-10">
            {navlist.map((item) => {
              return (
                <NavItem href={item.href} key={`${item.name}`}>
                  {item.name}
                </NavItem>
              );
            })}
          </div>
          <SwicthLanguage />
        </div>
        <motion.div
          onAnimationStart={() => setIsOverlay(!isOverlay)}
          animate={isOpen ? "open" : "closed"}
          className="relative w-full max-w-6xl touch-none items-center rounded-full border bg-white p-4 px-4 py-4 font-semibold lg:hidden"
        >
          <div className="flex w-full justify-between space-x-10">
            <div className="relative flex items-center justify-center space-x-2">
              <Link href="/" className="flex flex-wrap items-center space-x-2">
                <Image src={logo} height={48} width={48} alt="" />
                <div className="font-poppins text-[22px] font-bold text-blue-primary-400">
                  CAPITAL
                </div>
              </Link>
            </div>
            <div className="relative flex items-center justify-center space-x-3">
              <SwicthLanguage />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="selft-center h-12 w-12 rounded bg-white p-0.5 text-center"
              >
                {isOpen ? <XMarkIcon /> : <Bars3Icon />}
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              display: "none",
            }}
            variants={{
              open: {
                opacity: 1,
                display: "flex",
                transition: { delayChildren: 0.03, staggerChildren: 0.1 },
              },
              closed: {
                opacity: 0,
                display: "none",
                transition: {
                  when: "afterChildren",
                  staggerDirection: -1,
                  staggerChildren: 0.1,
                },
              },
            }}
            className="absolute inset-x-0 -bottom-2 flex w-full translate-y-full flex-col items-center justify-center space-y-2"
          >
            {navlist.map((item, index) => (
              <motion.div
                key={`nav-mobile-${index}`}
                className="w-full"
                variants={itemVariants}
              >
                <Link
                  href={item.href}
                  className="group flex w-full justify-center self-start rounded-full bg-white py-2 px-4 text-center shadow-lg"
                >
                  <span className="w-fit after:block after:h-[1px] after:w-0 after:bg-black after:transition-all after:content-[''] after:group-hover:w-full">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        animate={isOverlay ? "closed" : "show"}
        variants={{
          show: {
            zIndex: 40,
            opacity: 1,
          },
          closed: {
            opacity: 0,
            transitionEnd: { zIndex: -40 },
          },
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed inset-0 touch-none bg-gradient-to-b from-black/70 to-black/20 backdrop-blur"
      ></motion.div>
    </>
  );
};

export default Navbar;
