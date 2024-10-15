import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { projects } from "../extras"; 
import { fadeIn } from "../util/motion";
import{ TSD } from "../Assets";

export const Portfolio = () => {
  const PlaceholderBanner = TSD;

  return (
    <section className={`flex flex-col w-full mx-auto`}>
      <div className={`relative top-[40px] ${styles.padding} w-full max-w-7xl mx-auto`}>
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
          {/* Banner Image */}
          <img
            src={PlaceholderBanner}
            alt="Banner Placeholder"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
            <div className="absolute bottom-0 w-full flex justify-center items-center h-[200px]">
              <h1 className="text-white text-4xl font-bold">My Portfolio</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-5 max-w-5xl mx-auto text-center`}>
        <p className="text-white text-lg">
          Below is a collection of Web applications I've worked on over the years.
          Some projects were developed in collaboration with teams, where I played a role in task delegation and feature development.
          Take your time to explore the projects and the work behind them.
        </p>
      </div>

      <div className={`top-[40px] ${styles.padding} max-w-7xl mx-auto`}>
        <h2 className="text-center text-3xl font-bold text-white my-10">Web Applications I've worked on</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              name={project.name}
              description={project.description}
              date={project.date}
              image={project.image}
              source_link={project.source_link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ index, name, description, date, image, source_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary flex flex-col p-5 rounded-2xl w-full h-full hover:scale-110 duration-500">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white text-xl font-bold">{name}</h3>
          <p className="text-secondary mt-2 text-sm">{date}</p>
          <p className="text-secondary mt-4 text-sm">{description}</p>

          <div className="mt-5">
            <a
              href={source_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 underline"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;