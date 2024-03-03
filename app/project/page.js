"use client";

import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import FooterPage from "../Footer/page";

// import { BsChevronRight } from "react-icons/bs";


function Page() {

  const [userData, setUserData] = useState([]);
  const username = 'JonasVera';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <>
      <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 ">
        <div className=" lg:p-6 p-4 max-md:p-5 ">
          <div className="p-3 max-md:p-3 rounded-xl">
            <div className="flex  justify-between items-center mt-4  ">
              <div className="flex items-center">
                <div className="w-[6px] mr-2  h-[6px] rounded-full  bg-[#6b6b6b]" />
                <h1 className="text-neutral-700   dark:text-[#C0C0C0] text-lg font-InterMe">
                  Meus Projetos
                </h1>
              </div>

              <div className="border-neutral-300  dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md  flex  items-center gap-x-1 ">
                <Link href="https://github.com/JonasVera" target="__blank" className="text-neutral-700 dark:text-white  text-sm font-semibold">
                  Ver Todos
                </Link>
                <FiArrowRight className="text-neutral-500" />
              </div>

            </div>

            <div className="mt-6">

              {userData?.map((repositorio) => (
                <Link key={repositorio.name} target="__blank" href={repositorio.html_url}>
                  <div
                    key={repositorio.name}
                    className="bg-white dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-4 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                  >
                    <div className="flex items-center gap-x-4 max-md:flex-col max-md:items-start">

                      <div className="max-md:mt-5">
                        <h1 className="text-lg font-InterMe ">{repositorio.name}</h1>
                        <p className="text-sm text-neutral-400 max-md:my-1">
                          {repositorio.language}
                        </p>

                      </div>

                    </div>

                    <div className="max-md:hidden md:block">
                      <BsChevronRight />
                    </div>
                  </div>
                </Link>
              ))}

            </div>


          </div>
        </div>

      </div>
      <FooterPage />
    </>
  );
}


export default Page;

