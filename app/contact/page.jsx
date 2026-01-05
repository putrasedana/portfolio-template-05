"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+40) 243 673 198" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nolansnow@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Tech Corner, Code Town 123",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col xl:flex-row gap-7.5">
          {/* form */}
          <div className="xl:w-[60%] order-2 xl:order-0">
            <form className="flex flex-col gap-6 p-10 bg-slate-800 rounded-none">
              <h3 className="text-4xl text-green-500">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                earum blanditiis quasi exercitationem cum neque!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-20"
                placeholder="Type your message here."
              ></Textarea>

              {/* button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-0 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-13 h-13 xl:w-18 xl:h-18 bg-slate-800 text-green-500 rounded-none flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
