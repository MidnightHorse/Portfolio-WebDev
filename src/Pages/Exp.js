import React from "react";
import { styles } from "../styles";
import { github } from "../Assets";
import { motion } from "framer-motion";
import { projects } from "../extras"
import { fadeIn, textVariant } from "../util/motion";

const GithubIcon = ({ link }) => {
    return(
        <div
        onClick={() => window.open(link, "_blank")}
        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
  >
    <img
      src={github}
      alt='source code'
      className='w-3/4 h-3/4 object-contain'
    />
  </div>
)};
const ProjectCard = ({
    index,
    name,
    description,
    date,
    image,
    source_link,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className='bg-tertiary flex flex-col p-5 rounded-2xl sm:w-[360px] w-full h-full hover:scale-110 duration-500'>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-fit rounded-2xl'
            />
          </div>
  
          <div className='mt-5'>
            <div className=' text-white'>
              <div className='flow-root'>
                <span className='float-left font-bold text-[24px]'>{name}</span>
                <p className="float-right right-0">
                  <GithubIcon link={source_link} />
                </p>
              </div>      
              <h3 className='mt-1 text-[14px]'>{date}</h3>
            </div>
            <p className='my-3 text-secondary text-[14px]'>{description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

export const Project = () => {
    return (
      <section className={`flex flex-col w-full h-screen mx-auto`}>
      <div className={`top-[40px] ${styles.padding} max-w-7xl mx-auto`}>
      </div>
      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      </section>
    );
  };
  
  export default Project;