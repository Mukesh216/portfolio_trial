import { BsArrowDown } from "react-icons/bs";
import axios from "axios";
import codeBg from "./assets/img4.jpg";
import { useRef, useEffect, useState } from "react";
import "animate.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const bottomTitRef = useRef(null);

  useEffect(() => {
    axios.get('https://mocki.io/v1/e5b1fadf-7d0d-4641-b6f7-db6bec9b2d1b')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className=" relative h-full bg-Bg">
      <div
        className="pt-22 text-white relative animate__animated animate__fadeIn"
        style={{
          height: "100vh",
          backgroundImage: `url(${codeBg})`,
          backgroundPosition: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex flex-col justify-center text-center items-center"
          style={{ height: "100%" }}
        >
          <div className="tit-bg border-teal-200 border-4"></div>
          <div className=" animate__animated animate__fadeInDown tit">
            <h1 className="text-4xl md:text-4xl lg:text-6xl text-center font-poppins font-extrabold tracking-wider">
              <span className="border-b-4 border-white-700 rounded-full bg-Bg ps-6 pe-6 text-custom ">
                Productive Developments
              </span>
            </h1>
            <h3 className="text-lg md:text-xl lg:text-5xl tracking-wider mt-8">
              <span className=" border-b-4 border-custom rounded-full bg-Bg ps-6 pe-6">
                My Projects
              </span>
            </h3>
          </div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 group">
            <button
              className="border-2 btn-arrow border-custom rounded-full p-8 relative flex justify-center text-center group-hover:bg-custom hover:text-black hover:scale-90 hover:shadow-none"
              style={{ width: "120px", height: "120px" }}
              onClick={() =>
                bottomTitRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <BsArrowDown className="icon text-4xl top-0 absolute boun" />
            </button>
          </div>
        </div>
      </div>

      <div className=" text-white text-center p-8 pt-24" ref={bottomTitRef}>
        <h1 className="greet text-custom font-varela">
          <span>L</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
          <span>s</span>
          <span>t &nbsp;</span>
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </h1>

        <div className="projects-container animate__animated animate__fadeInUp" style={{userSelect:"none"}}>
          {projects.map(project => (
            <div className="projects-recent" key={project.id}>
              <img src={project.img} alt={project.alt} />
              <div className="span-layer">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a style={{cursor:"pointer"}}>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
