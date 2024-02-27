"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

import {
    PiLaptopThin,
    PiUserLight,
    PiHouseSimpleThin,
} from "react-icons/pi";
import { useTheme } from "next-themes";
import { FiCopy } from "react-icons/fi";
import { CiInstagram, CiTwitter } from "react-icons/ci";
  
function FooterPage() {
    const pathname = usePathname() || "";
    const [hoveredPath, setHoveredPath] = useState(pathname);
    const { theme, systemTheme, setTheme } = useTheme();

    
    const copiarEmail = () => {
        if (typeof window !== 'undefined' && navigator.clipboard) {
          navigator.clipboard.writeText("jonasverasilva@gmail.com"); // Copia o email para a área de transferência
          alert(`Email copiado: ${email}`);
        } else {
          console.error('A API de clipboard não está disponível.');
        }
      };

    return (

        
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
            className="bg-white top-24 mb-32 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
        >

            <footer className="mt-5 p-2 pb-5 ">

                <div className="mx-auto pb-10 max-w-md">
                    <div>
                        <h2 className=" text-4xl p-10 text-center dark:text-white text-[#353849] font-InterBo">
                            Vamos trabalhar juntos?
                        </h2>
                        <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                            Posso ajudar você a transformar suas ideias em realidade por meio da programação.
                        </p>
                    </div>

                    <div className="">
                        <div className="flex items-center gap-x-4 justify-center mt-6">
                            <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                                <AiOutlinePlusCircle className="text-white tex-3" />
                                <Link href={"/contact"} className="text-white  font-semibold">Entre em contato</Link>
                            </div>
                            <div onClick={copiarEmail()} className="border-neutral-300 cursor-pointer shadow-md border dark:border-neutral-700  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                                <FiCopy className="" />
                                <span className="text-neutral-700  dark:text-white font-semibold">
                                    Copiar Email
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 rounded-md">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2 font-InterRe">
                            <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                            <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                                Me siga em
                            </h1>
                        </div>

                        <div className="flex gap-x-2">
                            <Link href="https://twitter.com/jns_vera" target="__blank" className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                                <CiTwitter className="text-neutral-500 dark:text-white" />
                            </Link>
                            <Link  href="https://www.instagram.com/jonnas.dev/" target="__blank"  className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                                <CiInstagram className="text-neutral-500 dark:text-white" />
                            </Link>{" "}

                            <Link  href="https://www.linkedin.com/in/jonas-silva-vera-817b46192/" target="__blank"  className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
                                <FaLinkedinIn className="text-neutral-500 dark:text-white" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 rounded-md">
                    <div className="text-center">
                        <span className="text-neutral-700 dark:text-neutral-400">
                            © {new Date().getFullYear()} Jonas Silva Vera
                        </span>
                        <p className="text-neutral-500">
                            By{" "}
                            <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
                                Jonas
                            </span>
                        </p>
                    </div>
                </div>
            </footer>

        </motion.div>

    );
}

export default FooterPage;
