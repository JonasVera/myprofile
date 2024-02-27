"use client";

import React from "react";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import FooterPage from "../Footer/page";


function Page() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
    >
      <div className=" lg:p-6 p-5 ">
        <div className="flex mt-4 items-center gap-x-2 font-InterRe">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700  dark:text-[#C0C0C0] text-lg font-InterMe">
            Sobre
          </h1>
        </div>

        <div>
          <h1 className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            Jonas aqui!
          </h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            Ao longo de minha trajetória, destaco minha especialização na migração de sistemas, engajamento em projetos diversificados e habilidade em
            resolução de falhas. Trabalhei com uma variedade de tecnologias, incluindo Java, Spring Boot, Angular, VB.Net e C#.
            Minha experiência abrange desde a concepção até a implementação, garantindo soluções eficazes.
            Recentemente, concentrei-me em testes, correções e desenvolvimento utilizando Java em soluções bancárias.
            Estou preparado para aplicar essa experiência em novos desafios e contribuir para o sucesso de futuros projetos.
          </motion.p>
        </div>
        <div>
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800"
          >
            Mais sobre mim
          </motion.h1>

          <div className="p-4  rounded-lg dark:bg-[#373737] bg-white border dark:border-neutral-700/70">

          </div>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >

            No início da adolescência, comecei a frequentar cursos básicos de informática.
            No entanto, ainda não possuía um computador próprio. A única forma de acessar um computador era nos cursos, na escola em raras ocasiões, ou em lan houses.
            Apesar disso, aprendi muito de forma autodidata por meio das apostilas dos cursos que fazia, decorando e praticando no dia da aula.
            Dessa maneira, adquiri conhecimentos sobre formatação de computadores e notebooks, iniciando assim minha jornada. Quando obtive habilidades mais avançadas, comecei a trabalhar com formatação e manutenção.
            O que ganhava era destinado para ajudar minha mãe, e eu me divertia fazendo isso. No entanto, sentia que essas atividades eram limitadas e ansiava compreender mais profundamente o universo da programação,
            desejando ser capaz de criar meus próprios softwares. Entretanto, não possuía os recursos necessários para isso. Já no oitavo ano do ensino fundamental, estabeleci como meta me tornar técnico em informática
            quando descobri a existência de uma escola de ensino médio técnico.
            Meu primeiro dia de aula coincidiu com meus 15 anos de idade, e estava muito empolgado com essa nova empreitada. No curso, estava mais interessado no curso técnico do que nas disciplinas do ensino médio.

          </motion.p>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            Em 2021, dei um importante passo ao me formar como analista de sistemas pela Faculdade Lourenço Filho. Este foi apenas o início de uma jornada em constante aprendizado e evolução no mundo da tecnologia.

          </motion.p>

        </div>
      </div>

    <FooterPage />
    </motion.div>
  );
}

export default Page;
