"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with over a decade of experience in creating dynamic and responsive websites. My expertise lies in front-end development, UI/UX design, and optimizing web performance.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nolan Snow",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (555) 123-4567",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "nolan.snow",
    },
    {
      fieldName: "Nationality",
      fieldValue: "American",
    },
    {
      fieldName: "Email",
      fieldValue: "nolan.snow@example.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/icons/badge.svg",
  title: "My Experience",
  description:
    "Over the years, I have worked on a variety of projects that have honed my skills and expanded my knowledge in web development. ",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Web Developer",
      duration: "Jan 2020 - Present",
    },
    {
      company: "Web Creators LLC",
      position: "Front-End Developer",
      duration: "Jun 2016 - Dec 2019",
    },
    {
      company: "Design Studio",
      position: "Junior Web Developer",
      duration: "Jan 2014 - May 2016",
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "Jun 2012 - Dec 2013",
    },
    {
      company: "Web Agency",
      position: "Web Development Intern",
      duration: "Jan 2011 - May 2012",
    },
    {
      company: "Startup Hub",
      position: "Intern Developer",
      duration: "Jun 2010 - Dec 2010",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/icons/cap.svg",
  title: "My Education",
  description:
    "I have pursued formal education and certifications to strengthen my foundation in web development. Here are some of the key educational milestones in my career.",
  items: [
    {
      institution: "State University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2010 - 2014",
    },
    {
      institution: "City College",
      degree: "Associate Degree in Web Development",
      duration: "2008 - 2010",
    },
    {
      institution: "Online Courses",
      degree: "Web Development Certification",
      duration: "2016",
    },
    {
      institution: "Code Academy",
      degree: "Web Development Certification",
      duration: "2017",
    },
    {
      institution: "Udemy",
      degree: "Web Development Certification",
      duration: "2018",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "My skill set encompasses a wide range of technologies and tools that I have mastered over the years. Here are some of the key skills that I bring to the table.",
  skillsList: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Figma", icon: <FaFigma /> },
  ],
};

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 mx-auto max-w-6xl w-full"
    >
      <div className="w-full">
        <Tabs
          defaultValue="Experience"
          className=" w-full flex flex-col xl:flex-row gap-15"
        >
          <TabsList className="flex flex-col w-full max-w-95 mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="Experience">Experience</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="About Me">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="Experience" className="w-full">
              <div className="flex flex-col gap-7.5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-100">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-slate-800 h-46 py-6 px-10 rounded-none flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-green-500">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-65 min-h-15 text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-7.5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-100">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-slate-800 h-46 py-6 px-10 rounded-none flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-green-500">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-65 min-h-15 text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="Skills" className="w-full h-full">
              <div className="flex flex-col gap-7.5">
                <div className="flex flex-col gap-7.5 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-7.5 gap-4">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-37.5 bg-slate-800 rounded-none flex justify-center items-center group cursor-pointer">
                              <div className="text-6xl group-hover:text-green-500 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent
              value="About Me"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-7.5">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-155 mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
