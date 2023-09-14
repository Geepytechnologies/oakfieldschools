import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { motion } from "framer-motion";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div>
      <div className="flex  flex-col w-full items-center justify-center my-3">
        <div className="flex items-center justify-center gap-2">
          <HiAcademicCap className={`h-[50px] w-[50px] text-first`} />
          <p className="font-mont text-[25px] text-first">
            Welcome to Oakfield
          </p>
        </div>
        {/* schools */}
        <div className="w-full items-center justify-center mt-9">
          <div className="grid grid-cols-1 md;grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-6">
            {/* early learning */}
            <motion.div
              initial={{ y: -10 }}
              transition={{ duration: 0.7 }}
              whileInView={{ y: 1 }}
            >
              <img
                src={"/students1.jpg"}
                alt={"students"}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p className="font-[500] text-gray-700 mt-2">Early Learning</p>
              <button className="text-white bg-primary rounded-xl font-[500] px-4 py-3 mt-1 hover:translate-y-3 transition-all duration-500 ease-in-out flex items-center justify-center gap-2">
                <span>Read More</span>
                <BsChevronDoubleRight className="animate-pulse" />
              </button>
            </motion.div>
            {/* primary */}
            <motion.div
              initial={{ y: -10 }}
              transition={{ duration: 0.7 }}
              whileInView={{ y: 1 }}
            >
              <img
                src={"/students5.jpg"}
                alt={"students"}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p className="text-gray-700 mt-2 font-[500]">Primary</p>
              <button className="text-white bg-primary rounded-xl font-[500] px-4 py-3 mt-1 hover:translate-y-3 transition-all duration-500 ease-in-out flex items-center justify-center gap-2">
                <span>Read More</span>
                <BsChevronDoubleRight className="animate-pulse" />
              </button>
            </motion.div>
            {/* secondary */}
            <motion.div
              initial={{ y: -10 }}
              transition={{ duration: 0.7 }}
              whileInView={{ y: 1 }}
            >
              <img
                src={"/students4.jpg"}
                alt={"students"}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p className="text-gray-700 mt-2 font-[500]">Secondary</p>
              <button className="text-white bg-primary font-[500] rounded-xl px-4 py-3 mt-1 hover:translate-y-3 transition-all duration-500 ease-in-out flex items-center justify-center gap-2">
                <span>Read More</span>
                <BsChevronDoubleRight className="animate-pulse" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
