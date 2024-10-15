import { styles } from "../styles";
import { StarsCanvas } from "../Components";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { projects } from "../extras"; 
import { fadeIn } from "../util/motion"

export const Home = () => {
  const navigate = useNavigate(); // Initialize the hook for internal navigation
  return (
    <div className='relative z-0'>
    <section className={`flex flex-col w-full mx-auto`}>
      <div className={`max-w-[75rem] mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
      <div className={`top-[40px] max-w-7xl mx-auto`}>
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
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
    <StarsCanvas />
    </div>
  );
};

const ProjectCard = ({ index, name, description, date, image, source_link, technologies }) => {
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
          <p className="text-secondary mt-4 text-sm font-bold">{technologies}</p>

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

export default Home;
