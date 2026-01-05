"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos magni atque dolor inventore nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vitae?",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    githhub: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos magni atque dolor inventore nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vitae?",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Node.js",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    githhub: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos magni atque dolor inventore nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vitae?",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind.css",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    githhub: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col xl:flex-row xl:gap-7.5">
          <div className="w-full xl:w-[50%] h-115 flex flex-col xl:justify-between order-2 xl:order-0">
            <div className="flex flex-col gap-7.5 h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent                     [-webkit-text-stroke:1px_white]">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-500 transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-green-500">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-green-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.githhub}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                        <BsGithub className="text-white text-3xl group-hover:text-green-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-130 mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-115 relative group flex justify-center items-center bg-slate-800">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-start"
                btnStyles="bg-green-500 hover:bg-green-600 text-slate-950 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Work;
