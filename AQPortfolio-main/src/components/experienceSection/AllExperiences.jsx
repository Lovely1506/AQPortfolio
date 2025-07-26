import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "coordinatror",
    company: "Cybercell club",
    date: "20223 - july2024",
    responsibilities: [
      "Coordinate between club heads and volunteers to ensure clear understanding and collaboration.",
      "Promote events or initiatives on social media or campus (if needed), and engage more participation",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "organizer & HR",
    company: "Cybercell club",
    date: "2024 - july2025",
    responsibilities: [
      "Organize web development Bootcamp and Code related compitions for all years students.",
      "This bootcamp is organized for the 2nd Years of BCET to know more about web development and this helps to chose their career domain and add a new skill to their resume.",
      "Provide support for students through their learning journey.",
      "Organize recruitment drives, shortlist applicants, and assist in onboarding new members."
    ],
  },
  {
    job: "Mentor",
    company: "Cybercell club",
    date: "2025- Present",
    responsibilities: [
      "Help members improve both technical and soft skills through sessions, workshops, and personal mentoring",
      "Provide support in resolving issues among members or within the team",
      "Offer advice on planning, organizing events, and managing internal challenges.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
  {
  job: "web developer Intern",
    company: "CODEXINTERN",
    date: "1july2025- 31july2025",
    responsibilities: [
      "Created basic web pages using HTML, CSS, and JavaScript.",
      "Learned about responsive design and implemented it in projects.",
      "Collaborated with mentors or senior developers to understand project needs and workflows.",
      "Gained experience in version control systems like Git & GitHub.",
],
  },
];
const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
