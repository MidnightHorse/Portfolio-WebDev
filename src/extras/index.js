import{
  FullstackDev, ComputerGraph, VideoG, SuperDry, VRH, LS, Intern, Portfolio12, Book1,
  placeh
} from "../Assets";

const navLinks = [
  ];

const interests = [
    {
      title: "Full-Stack Development",
      icon: FullstackDev,
    },
    {
      title: "Video Game Development",
      icon: VideoG,
    },
    {
      title: "Computer Graphics",
      icon: ComputerGraph,
    }
  ];

const projects = [
  {
    name: "Interactive showcase",
    description:
      "Created a separate portfolio that entails complete details about myself, and my unrelated web development projects",
    date: "June 2024 - August 2024",
    points: [],
    image: Portfolio12,
    source_link: "https://austinhaug.netlify.app/",
    technologies: "Technologies: React.js, TailwindCSS, Netlify(CI/CD)"
  },
  {
    name: "CarGo",
    description:
      "Collaborated on a Ride-sharing economy application, designed to allow users to rent/rent out vehicles to local residents in the community",
    date: "March 2023 - June 2023",
    points: [],
    image: LS,
    source_link: "https://github.com/MidnightHorse/Cargo",
    technologies: "Technologies: React.js, Node.js, MongoDB, Twilio"
  },
    {
      name: "Astronomy Tracker",
      description:
        "A web application utilizing NASA API to create a hub for astronomers to discuss news about events regarding Mars, Exoplanets, etc.",
      date: "April 2023 - May 2023",
      points: [],
      image: SuperDry,
      source_link: "https://github.com/MidnightHorse/AT-App",
      technologies: "Technologies: Linux, Apache, MySQL, PHP"
    },
    {
      name: "Library Server",
      description:
        "A web application uses HTTP requests to facilitate the request response cycle and transfer data using JSON or XML",
      date: "May 2023",
      points: [],
      image: Book1,
      source_link: "https://github.com/MidnightHorse/LS-app",
      technologies: "Technologies: HTML/CSS, Javascript, Bootstrap, Jquery"
    },
    {
      name: "Internship collection",
      description:
        "A small collection of work that I've done under my internship, most are rough drafts and sketches",
      date: "March 2019 - June 2019",
      points: [],
      image: Intern,
      source_link: "https://github.com/MidnightHorse/IC-Collection",
      technologies: "Technologies: Drupal, Adobe Photoshop"
    },
    
  ];

  export {navLinks, interests, projects}