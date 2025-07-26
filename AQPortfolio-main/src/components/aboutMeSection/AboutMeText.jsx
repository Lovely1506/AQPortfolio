import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Lovely kumari, a web developer. I specialize in React and front-end developmentI enjoy turning ideas into real web experiences and continuously learning new tools and technologies to improve my craft.
        Currently exploring frameworks like React and design libraries like Tailwind CSS,
         I have completed several self-driven projects and internships that have helped me understand both front-end development
          and the importance of user experience. I’m always open to new challenges and collaboration opportunities that help 
          me grow as a developer and problem-solver.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
