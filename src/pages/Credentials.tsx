
import photo from "../assets/profile-pic (14).png";
import { Linkedin, Github, Twitter, Dribbble } from "lucide-react";
import star from "../assets/starsvg.svg";

const Credentials = () => {
  const skills = [
    {
      name: "ReactJS",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      level: "Proficient",
    },
    {
      name: "Javascript",
      level: "Intermediate",
    },
    {
      name: "NodeJS",
      level: "Beginner",
    },
    {
      name: "HTML",
      level: "Proficient",
    },
    {
      name: "UI/UX Design",
      level: "Intermediate",
    },
    {
      name: "Figma",
      level: "Intermediate",
    },
    {
      name: "GSAP",
      level: "Beginner",
    },
    {
      name: "C++",
      level: "Intermediate",
    },
    {
      name: "Data Structures and Algorithms",
      level: "Intermediate",
    },
    {
      name: "SQL",
      level: "Beginner",
    },
    {
      name: "MongoDB",
      level: "Beginner",
    },
    {
      name: "Git and Github",
      level: "Intermediate",
    },
    {
      name: "Spline 3D",
      level: "Intermediate",
    },
  ];

  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col  justify-center items-center lg:mx-20 md:mx-16 select-none">
      {/* left section  */}
      <div className="flex justify-center items-center w-1/3 lg:sticky md:sticky lg:top-7 md:top-5 md:bottom-5 lg:bottom-7">
        <div
          id="bg"
          data-aos="zoom-in"
          className="p-5 rounded-3xl border lg:w-80 md:w-72 flex flex-col justify-center sticky items-center"
        >
          <img src={photo} className="rounded-3xl" alt="" />
          <h2 className="pt-8 text-3xl font-semibold justify-center items-center">
            Piyush Kakde
          </h2>
          <p className=" text-sm text-zinc-400 pt-3">@piyushk79</p>
          <div className="flex justify-center items-center lg:gap-4 md:gap-2 sm:gap-2 pt-7">
            <a
              className="p-4 sm:p-3 border bg-zinc-900 rounded-full hover:bg-white group"
              href="https://www.linkedin.com/in/piyush-kakde-6114ba214/"
              target="blank"
            >
              <Linkedin className="group-hover:stroke-black" />
            </a>
            <a
              className="p-4 sm:p-3 rounded-full border bg-zinc-900 hover:bg-white group"
              href="https://github.com/PiyushK79"
              target="blank"
            >
              <Github className="group-hover:stroke-black" />
            </a>
            <a
              className="p-4 sm:p-3 rounded-full border bg-zinc-900 hover:bg-white group"
              href="https://twitter.com/Piyush_Kakde79"
              target="blank"
            >
              <Twitter className="group-hover:stroke-black" />
            </a>
            <a
              className="p-4 sm:p-3 rounded-full border bg-zinc-900 hover:bg-white group"
              href="https://www.behance.net/piyushkakde79"
              target="blank"
            >
              <Dribbble className="group-hover:stroke-black" />
            </a>
          </div>

          <a
            href="/contact"
            className="hover:bg-zinc-300 group border rounded-full flex font-medium justify-items-center w-full p-4 mt-7 place-content-center hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* right section */}
      <div className="lg:w-2/3 lg:mx-20 md:mx-16 sm:mx-8 sm:mt-8">
        {/* about */}
        <div data-aos="fade-right" className="mb-14">
          {/* <h2 className="text-lg font-semibold underline">ABOUT ME</h2> */}
          <div className="col-span-2 lg:text-6xl md:text-4xl sm:text-3xl flex font-extrabold justify-center items-center text-center">
            <img className="lg:w-20 md:w-16 sm:w-10" src={star} alt="" />
            Self Summary
            <img className="lg:w-20 md:w-16 sm:w-10" src={star} alt="" />
          </div>
          <p className="text-md py-6 break-words lg:text-justify md:text-justify">
            I am a passionate web designer and developer with experience in MERN
            stack development.{" "}
          </p>
          <p className="text-md lg:text-justify md:text-justify">
          As a seasoned product designer specializing in web design and visual development, my expertise spans across diverse industries. With a track record of contributing to open-source events such as HacktoberFest'23, I bring a wealth of experience and a commitment to innovation in every project I undertake.
          </p>
        </div>

        {/* Education */}
        <div data-aos="fade-right" className="my-5">
          <h2 className="text-xl font-semibold underline">EDUCATION</h2>
          <div className="py-8">
            <p className="text-sm text-zinc-400">2020 - 2024</p>
            <p className="text-lg text-orange-500">Bachelor of Technology</p>
            <p className="text-sm">
              Government College of Engineering, Aurangabad
            </p>
            <p className="text-sm text-zinc-400">(CGPA - 8.594)</p>
          </div>

          <div className="py-5">
            <p className="text-sm text-zinc-400">2020</p>
            <p className="text-lg text-orange-500">HSC in Science</p>
            <p className="text-sm">Kamla Nehru Mahavidyalaya, Nagpur</p>
            <p className="text-sm text-zinc-400">(Percentage - 87.85)</p>
          </div>

          <div className="py-5">
            <p className="text-sm text-zinc-400">2018</p>
            <p className="text-lg text-orange-500">SSC</p>
            <p className="text-sm">Sanjuba High School CBSE, Nagpur</p>
            <p className="text-sm text-zinc-400">(Percentage - 93.40)</p>
          </div>
        </div>

        {/* Experience */}
        <div  data-aos="fade-right" className="my-5">
          <h2 className="text-xl font-semibold underline">
            EXPERIENCE
          </h2>
          <div className="py-8">
            <p className="text-sm text-zinc-400">JUNE 2023 - JULY 2023</p>
            <p className="text-lg text-orange-500">Web development Intern</p>
            <p className="text-sm text-zinc-400">
              @ Government Medical College, Aurangabad
            </p>
            <ul className="text-md my-2">
              <li className="pb-2">
                ● Managed the ongoing development and refinement of "Neocare," a
                specialized medical follow-up software, overseeing bug
                resolution and code enhancements.
              </li>
              <li className="pb-2">
                ● Applied practical expertise to various real-world projects,
                delving into their codebases to understand and optimize
                functionalities.
              </li>
              <li className="pb-2">
                ● Orchestrated seamless collaboration among team members and
                mentors to ensure the attainment of the highest-quality
                outcomes.
              </li>
            </ul>
          </div>

          <div data-aos="fade-right" className="py-5">
            <p className="text-sm text-zinc-400">APRIL 2023 - MAY 2023</p>
            <p className="text-lg text-orange-500">
              Frontend development Intern
            </p>
            <p className="text-sm text-zinc-400">@ CodeClause</p>
            <ul className="text-md my-4">
              <li className="pb-2">
                ● Created frontend projects centered around specific tasks,
                utilizing HTML, CSS, and Javascript to implement dynamic user
                interfaces.
              </li>
              <li className="pb-2">
                ● Delved deeply into frontend technologies, actively expanding
                my skill set through hands-on exploration and project
                development.
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div data-aos="fade-right" id="skills" className="">
          <h2 className="text-xl font-semibold mb-2 underline">SKILLS</h2>
          <div className="grid lg:grid-rows-5 md:grid-rows-2 grid-cols-2 grid-flow-row">
            {skills.map((item, index) => (
              <div key={index} className="p-5">
                <h2 className="text-lg">{item.name}</h2>
                <p className="text-sm text-zinc-400">{item.level}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Credentials;
