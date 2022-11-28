import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import usflag from "../../public/images/svg/usflag.svg";
import idflag from "../../public/images/svg/idflag.svg";
import Image from "next/image";

const animatevariant = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const SwicthLanguage = () => {
  const [isLang, setIsLang] = useState("id");
  const handleClick = () => {
    isLang == "id" ? setIsLang("en") : setIsLang("id");
  };

  return (
    <button
      className="relative flex h-6 w-14 justify-start rounded-full bg-gray-100 p-1 data-[lang='en']:justify-end"
      onClick={handleClick}
      data-lang={`${isLang}`}
    >
      <motion.div
        layout
        transition={animatevariant}
        data-lang={`${isLang}`}
        className="absolute inset-0 flex h-full w-full items-center justify-end p-1 text-sm font-bold data-[lang='en']:justify-start"
      >
        <AnimatePresence>
          {isLang == "id" ? <div>IND</div> : <div>ENG</div>}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="relative h-4 w-4 overflow-hidden rounded-full bg-gray-600"
        layout
        transition={animatevariant}
      >
        <AnimatePresence>
          {isLang == "id" ? (
            <Image
              src={idflag}
              alt=""
              fill
              sizes="100%"
              className="object-cover"
            />
          ) : (
            <Image
              src={usflag}
              alt=""
              fill
              sizes="100%"
              className="object-cover"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default SwicthLanguage;
