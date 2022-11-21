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
      className="p-1 bg-gray-100 rounded-full w-14 h-6 data-[lang='en']:justify-end justify-start flex relative"
      onClick={handleClick}
      data-lang={`${isLang}`}
    >
      <motion.div
        layout
        transition={animatevariant}
        data-lang={`${isLang}`}
        className="w-full h-full flex absolute inset-0 items-center text-sm font-bold p-1 data-[lang='en']:justify-start justify-end"
      >
        <AnimatePresence>
          {isLang == "id" ? <div>IND</div> : <div>ENG</div>}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="h-4 w-4 bg-gray-600 rounded-full relative overflow-hidden"
        layout
        transition={animatevariant}
      >
        <AnimatePresence>
          {isLang == "id" ? (
            <Image src={idflag} alt="" fill className="object-cover" />
          ) : (
            <Image src={usflag} alt="" fill className="object-cover" />
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default SwicthLanguage;
