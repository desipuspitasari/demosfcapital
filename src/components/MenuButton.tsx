import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.button
      onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      className="selft-center h-12 w-12 rounded bg-white p-0.5 text-center"
    >
      <AnimatePresence>
        {isOpen ? <XMarkIcon /> : <Bars3Icon />}
      </AnimatePresence>
    </motion.button>
  );
};

export default MenuButton;
