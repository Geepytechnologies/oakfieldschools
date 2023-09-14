import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi";

type Props = {};

const Header = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const togglemenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="flex-0 flex flex-col sticky top-0 z-[999] w-full items-center min-h-[90px] justify-between">
      <div className="flex flex-row bg-white w-full items-center py-3 justify-between px-3">
        <Link to="/">
          <div className="flex items-center gap-2">
            <HiAcademicCap className={`h-[50px] w-[50px] text-first`} />
            <span className="font-lora text-gray-800 tracking-[1px] font-[400] text-[20px] md:text-[30px]">
              Oakfield
            </span>
          </div>
        </Link>
        <div>
          <motion.ul
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="text-black hidden font-pop  md:flex gap-9 text-[20px] items-center justify-center"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/portal"}>Portal</Link>
            </li>
            <li>
              <Link to={"/news"}>News</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </motion.ul>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row md:hidden  text-[30px] font-[500]  text-gray-500 items-center"
          >
            {!menu && <BiMenuAltRight onClick={() => togglemenu()} />}
            {menu && <AiOutlineClose onClick={() => togglemenu()} />}
          </motion.div>
        </div>
      </div>
      <div
        className={` bg-first relative ${
          menu
            ? "max-h-[200px] overflow-hidden bg-first flex items-center w-full h-[200px] py-4 transition-[max-height] duration-500 ease-in-out "
            : "max-h-[0px] overflow-hidden h-[200px] w-full transition-[max-height] duration-500 ease-in-out"
        }`}
      >
        <div className="bg-white absolute left-[20px] opacity-30 my-auto shadow-xl flex items-center justify-center rounded-full w-[60px] h-[60px]">
          <HiAcademicCap className={`h-[50px] w-[50px] text-first `} />
        </div>
        <div className="bg-white absolute right-[20px] opacity-30 my-auto shadow-xl flex items-center justify-center rounded-full w-[60px] h-[60px]">
          <HiAcademicCap className={`h-[50px] w-[50px] text-first `} />
        </div>
        <div className="w-full h-full flex">
          <ul className="space-y-3 w-full h-full flex flex-col items-center justify-center text-white">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/portal"}>Portal</Link>
            </li>
            <li>
              <Link to={"/news"}>News</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
