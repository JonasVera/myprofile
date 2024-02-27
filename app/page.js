"use client";

import { FiArrowRight, FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
import {LiaCertificateSolid} from "react-icons/lia";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { profileData } from "./utils/profileData";
import React, { useEffect, useState } from 'react';
import { GrValidate } from "react-icons/gr";
import FooterPage from "./Footer/page";

export default function Home() {



  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
      >
        <div className="p-2 lg:mx-4 pb-10">
          <div className=" lg:p-6 p-3 ">
            <div className="flex justify-between  w-full">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.4 },
                  }}
                  className="text-neutral-700 dark:text-[#C0C0C0] max-md:text-xl font-InterMe"
                >
                  Desenvolvedor Back-End
                </motion.h1>
              </div>

              <Link href={"/contact"}>
                <div className="bg-[#F6F8FA] dark:bg-[#115e3b] h-6 w-6 lg:w-fit lg:px-3 rounded-full flex items-center justify-center gap-x-2">
                  <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
                  <p className="text-[#2b9364] hidden lg:flex text-xs font-semibold uppercase ">
                    Disp. Fre lancer
                  </p>
                </div>
              </Link>
            </div>

            <div className="  flex-col md:flex-row   my-16 flex items-center md:justify-between">
              <div className=" sm:order-2   max-md:mt-10 flex md:block md:flex-row items-center  flex-col md:order-1 order-2">
                <h1 className="text-4xl text-neutral-700 font-InterBo dark:text-white">
                  Oi!, Jonas aqui.
                </h1>

                <motion.p
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.2, delay: 0.3 },
                  }}
                  className="  text-lg max-md:text-center  my-3 text-neutral-500 dark:text-neutral-300"
                >

                  Desenvolvedor de software, <br />
                  Atualmente trabalhando na <br />Fóton Informática com <br /> desenvolvimento de sistemas bancários
                </motion.p>

              </div>
              <div className="border text-center flex md:justify-center border-neutral-200 dark:border-neutral-700 dark:bg-[#2C2C2C] w-fit md:order-1 order-1 rounded-full p-3 ">
                <motion.img
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.4, delay: 0.5 },
                  }}
                  className="w-32 h-32 flex object-cover   rounded-full "
                  src="https://lh3.googleusercontent.com/a/ACg8ocLhXQ8nbYCXlxpsNl4YIeqGGn_YTHCA21dren9EaEulQF5i=s288-c-no"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6 max-md:p-3 rounded-xl">
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-x-2 font-InterRe">
                  <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                  <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                    Experiência profissional
                  </h1>
                </div>
              </div>

              <div className='flex  flex-row h-full m-auto'>

                <div className='mt-5'>

                  <p className="mb-2">
                    Formado em {profileData.formacao_academica.curso}
                    <span className="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Instituição: {profileData.formacao_academica?.instituicao}</span>
                    <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ano de Conclusão: {profileData.formacao_academica?.ano_conclusao}</span>
                  </p>
                  <div >
                    {profileData.experiencia_profissional.map((experiencia) => (

                      <ol key={experiencia.empresa} class="relative border-s border-[#28C780] dark:border-[#115e3b]">
                        <li className="mb-1 p-2 ms-6">
                        <span className="absolute flex items-center justify-center w-4 h-4 bg-teal-200 rounded-full -start-2 ring-4 ring-white dark:ring-[#28C780] dark:bg-white">
                        <GrValidate />
                          </span>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> {experiencia.cargo}
                          </h3>
                          <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experiencia.empresa}</span>
                          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experiencia.periodo}</time>

                          <div

                            dangerouslySetInnerHTML={{ __html: experiencia && experiencia.descricao }}
                          ></div>
 

                        </li>
                      </ol>
                    ))}

                    <div className="flex items-center mt-5 mb-5 gap-x-2 font-InterRe">
                      <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                      <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                        Cursos extras
                      </h1>
                    </div>
                    {profileData.qualificacoes_e_atividades_profissionais.map((qualificacoes) => (
                      <ol className="relative border-s mt-1 border-[#28C780] dark:border-[#115e3b]" key={qualificacoes}>
                        <li className="mb-1 ms-5">
                          <span className="absolute flex items-center justify-center w-4 h-4 bg-teal-200 rounded-full -start-2 ring-4 ring-white dark:ring-[#28C780] dark:bg-white">
                               <LiaCertificateSolid />
                          </span>
                          <p className="flex mb-1 items-centerp px-2 text-sm  text-gray-900 dark:text-white" dangerouslySetInnerHTML={{ __html: qualificacoes }}>
                          </p>
                        </li>
                      </ol>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>  
        </div>  

        <FooterPage />
      </motion.div>
    </>
  );
}
