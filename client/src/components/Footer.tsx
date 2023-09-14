import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { LuFacebook } from "react-icons/lu";
import {Link} from "react-router-dom"

type Props = {};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex-0 bg-first py-9 mt-9 text-[rgba(255,255,255,0.8)]">
      <div className="flex p-2 items-center flex-col md:flex-row justify-center gap-9">
        <div>
          <Link to="/">
            <div className="flex items-center gap-2">
              <HiAcademicCap className={`h-[50px] w-[50px] text-white`} />
              <span className="font-lora text-white tracking-[1px] font-[400] text-[20px] md:text-[30px]">
                Oakfield
              </span>
            </div>
          </Link>
          <div className="flex flex-col md:flex-row gap-9">
            <ul className="flex flex-col gap-3 mt-9">
              <li className="font-[700] text-[24px]">Useful Links</li>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/portal"}>School Portal</Link>
              </li>
              <li>
                <Link to={"/news"}>News</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact us</Link>
              </li>
            </ul>
            <ul className="flex flex-col mt-9">
              <h2 className="font-[700] text-[24px]">Contact</h2>
              <h3>You can contact us through the following links</h3>
              <div className="flex flex-col mt-3 gap-3">
                <div className="flex items-center gap-2">
                  <AiOutlineMail />
                  <p>admin@oakfield.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsFillTelephoneFill />
                  <p>+234 802 398 8802</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  <p>Benin City, Edo State. Nigeria</p>
                </div>
              </div>
            </ul>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="border h-9 w-9 flex items-center justify-center rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] ">
              <AiOutlineYoutube />
            </div>
            <div className="border h-9 w-9 flex items-center justify-center rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] ">
              <AiOutlineInstagram />
            </div>
            <div className="border h-9 w-9 flex items-center justify-center rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] ">
              <LuFacebook />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-2">
        <div className="text-light text-center w-full flex flex-col items-center justify-center">
          <p>
            Copyright &#169; {year} Oakfield Intl Schools. All rights reserved.
          </p>
          <p>
            Made by{" "}
            <Link target="blank" to="https://geepy.vercel.app">
              Geepy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
