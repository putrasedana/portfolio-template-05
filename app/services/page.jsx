"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build responsive and interactive websites using modern web technologies. And ensure they are optimized for performance and SEO.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I create intuitive and visually appealing user interfaces and experiences that enhance usability and engagement.",
    href: "",
  },
  {
    num: "03",
    title: "Consulting",
    description:
      "I provide expert advice on web development best practices, technology stack selection, and project planning to help businesses achieve their goals.",
    href: "",
  },
  {
    num: "04",
    title: "SEO Optimization",
    description:
      "I optimize websites for search engines to improve visibility and drive organic traffic. This includes keyword research and on-page optimization.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-15"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-transparent 
                    [-webkit-text-stroke:1px_white]
                    group-hover:[-webkit-text-stroke:1px_#00ff99]
                    transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-17.5 h-17.5 bg-white hover:bg-green-500 transition-all duration-500 flex justify-center items-center hover:[&>svg]:-rotate-45"
                  >
                    <BsArrowDownRight className="text-slate-800 text-3xl transition-all duration-500" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-500 transition-all duration-500">
                  {service.title}{" "}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
