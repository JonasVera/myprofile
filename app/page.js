"use client";

import { FiArrowRight, FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { profileData } from "./utils/profileData";
const links = [
  {
    img: "/img/img1.png",
    title: "Rectangle",
    subtitle: ["Product design, Icon design"],
    icon: <BsChevronRight />,
    href: "/rectangle",
  },
  {
    img: "/img/wink.png",
    title: "Morva labs",
    subtitle: ["Visual design, Branding"],
    href: "/morvalabs",
  },
  {
    img: "/img/foot.png",
    title: "Simply",
    subtitle: ["Landing  page, illustration design"],
    // u can redirect to other sites here
    href: "/simply",
  },
];
const projects = [
  {
    img: "/img/pizza.png",
    title: "Goven",
    subtitle: "framer template",
    icon: <BsChevronRight />,
  },
  {
    img: "/img/wink.png",
    title: "Upshifts",
    subtitle: "Web design collections",
  },
  {
    img: "/img/foot.png",
    title: "Subtle Folio",
    subtitle: "framer template",
  },
];

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
      >
        <div className="p-2 lg:mx-4">
          <div className=" lg:p-6 p-3">
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
                    <span class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Instituição: {profileData.formacao_academica?.instituicao}</span>
                    <span class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ano de Conclusão: {profileData.formacao_academica?.ano_conclusao}</span>
                  </p>
                  <div className=''>
                    {profileData.experiencia_profissional.map((experiencia) => (

                      <ol key={experiencia.empresa} class="relative border-s border-[#28C780] dark:border-[#115e3b]">
                        <li class="mb-1 p-2 ms-6">
                          <span class="absolute flex items-center justify-center w-6 h-6 bg-teal-200 rounded-full -start-3 ring-8 ring-white dark:ring-[#28C780] dark:bg-white">
                            <svg class="w-2.5 h-2.5 text-[#28C780] dark:text-[#115e3b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                          </span>
                          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> {experiencia.cargo} | {experiencia.empresa}
                          </h3>
                          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experiencia.periodo}</time>

                          <div
                            className='  '
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
                      <ol class="relative border-s mt-4 border-[#28C780] dark:border-[#115e3b]" key={qualificacoes}>
                        <li class="mb-1 ms-6">
                          <span class="absolute flex items-center justify-center w-6 h-6 bg-teal-200 rounded-full -start-3 ring-8 ring-white dark:ring-[#28C780] dark:bg-white">
                          <svg width="84px" height="84px" viewBox="-6.24 -6.24 36.48 36.48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M9 12L11 14L15 10M12 3L13.9101 4.87147L16.5 4.20577L17.2184 6.78155L19.7942 7.5L19.1285 10.0899L21 12L19.1285 13.9101L19.7942 16.5L17.2184 17.2184L16.5 19.7942L13.9101 19.1285L12 21L10.0899 19.1285L7.5 19.7942L6.78155 17.2184L4.20577 16.5L4.87147 13.9101L3 12L4.87147 10.0899L4.20577 7.5L6.78155 6.78155L7.5 4.20577L10.0899 4.87147L12 3Z" stroke="#000000" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/> </g>
                            </svg>
                          </span>
                          <p class="flex items-centerp px-2 mb-1 text-lg  text-gray-900 dark:text-white" dangerouslySetInnerHTML={{ __html: qualificacoes }}>
                          </p>
                        </li>
                      </ol>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div>

            <div hidden="true" className="dark:bg-[#2C2C2C] bg-[#F6F8FA] p-6  mt-6 rounded-md">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                  Products
                </h1>
              </div>


            </div>
          </div>
        </div>

        <div className="mt-24 p-2">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
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
                  <span className="text-white  font-semibold">Entre em contato</span>
                </div>
                <div className="border-neutral-300 shadow-md border dark:border-neutral-700  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
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
                <div className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                  <CiTwitter className="text-neutral-500 dark:text-white" />
                </div>
                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                  <CiInstagram className="text-neutral-500 dark:text-white" />
                </div>{" "}

                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
                  <FaLinkedinIn className="text-neutral-500 dark:text-white" />
                </div>
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
        </div>
      </motion.div>
    </>
  );
}
