
import projectstar from '../assets/projectstar.svg';
import CustomLogo from './CustomLogo'
import cryptohunt from "../assets/cryptohunt2.jpeg"
// import netflix from "../assets/netflix.jpeg"
import wings from "../assets/wings.jpeg"
import panorama from "../assets/panorama.jpeg"
import kanban from "../assets/kanban2.jpeg"
import stopwatch from "../assets/stopwatch2.jpeg"

const Projects = () => {

  const skills = [
    {
      img: cryptohunt,
      type: "FINTECH",
      name: "Crypto-Hunt",
      link: "/cryptohunt",
    },
    {
      img: wings,
      type: "EVENT",
      name: "Wings Website",
      link: "/wings",
    },
    // {
    //   img: netflix,
    //   type: "ENTERTAINMENT",
    //   name: "Netflix Clone",
    //   link: "/netflix",
    // },
    
    {
      img: kanban,
      type: "TASK MANAGEMENT",
      name: "Kanban Board",
      link: "/kanban",
    },
    {
      img: panorama,
      type: "CLUB",
      name: "Catalyst Website",
      link: "/catalyst",
    },
    {
      img: stopwatch,
      type: "FOCUS",
      name: "Stopwatch & Timer",
      link: "/stopwatchandtimer",
    },
  ]

  
  return (
    <>
    <div>
    {/* heading */}
    <div
    data-aos="zoom-in"
    className='flex justify-center items-center align-middle select-none'>
    <img src={projectstar} className='lg:w-24 sm:w-8' alt="" />
    <h2 className='lg:text-6xl sm:text-lg font-semibold flex justify-center items-center'>ALL PROJECTS</h2>
    <img src={projectstar} className='lg:w-24 md:w- sm:w-8' alt="" />
    </div>

    {/* projects div first */}
    <div className='mt-8'>
      <div className='grid grid-rows-2 lg:grid-flow-col md:grid-flow-row gap-6 justify-center items-center'>
      {skills.map((item, index) => (
      <div
      data-aos="zoom-in"
          key={index} 
          id="bg"
          className="border rounded-3xl flex-col justify-between p-7 pb-0 place-self-center"
        >
          <img 
            // width="300"
            src={item.img}
            className="rounded-2xl lg:w-80 md:w-72 sm:w-52"
            alt=""
            loading="lazy"
          />
          <a id="arrowicon" href={item.link}>
            <p className="text-xs mt-6 text-zinc-400">{item.type}</p>
            <h2 className="text-lg flex justify-between items-center pb-5">
              {item.name}
              <CustomLogo />
            </h2>
          </a>
      </div>
      ))}

      </div>
    </div>

    </div>
    </>
  )
}

export default Projects