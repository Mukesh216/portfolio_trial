import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "animate.css";

export default function Navbar() {

   
    return (
        <nav className="navbar h-20 fixed w-full  flex items-center z-10 bg-rose-500  border-b-2  ">
            <div className="px-4 sm:px-6 lg:px-8 flex w-full justify-between ">
                <div className="flex items-center logo animate__animated animate__rubberBand animate__delay-1s">
                    <div className="portfolio text-white text-6xl font-bold tracking-widest ">
                        <span className="text-custom font-hand">P</span>
                        <span className="text-custom font-hand">o</span>
                        <span className="text-custom font-hand">r</span>
                        <span className="text-custom font-hand">t</span>
                        <span className="text-custom font-hand">f</span>
                        <span className="text-custom font-hand">o</span>
                        <span className="text-white font-raleway">l</span>   
                        <span className="text-white font-raleway">i</span>
                        <span className="text-white "><i className=" text-4xl fa-regular fa-circle-check"></i></span>
                    </div>
                </div>
                <div className="flex items-center nav-link w-full justify-end  font-extrabold text-2xl animate__animated animate__fadeInDown " style={{userSelect:"none"}}>
                    <Link to="/" className=" p-2 font-hand  ms-4 active ">
                        Home
                    </Link>
                    <Link to="/about" className=" p-2 font-hand  ms-4">
                        About
                    </Link>
                    <Link to="/projects" className=" p-2 font-hand  ms-4">
                        Projects
                    </Link>
                    <Link to="/skills" className=" p-2 font-hand  ms-4">
                        Skills
                    </Link>
                    <Link to="/contact" className=" p-2 font-hand  ms-4">
                        Contact Me!
                    </Link>
                </div>
            </div>
        </nav>
    );
}
