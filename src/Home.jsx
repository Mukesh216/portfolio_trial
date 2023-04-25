import React from "react";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "animate.css";

export default function Home() {
    const el = React.useRef(null);

    React.useEffect(() => {
        let typed;

        const timeoutId = setTimeout(() => {
            typed = new Typed(el.current, {
                strings: [
                    "a Front end Developer",
                    " a Web Designer",
                    "an UI/UX Designer",
                ],
                typeSpeed: 50,
                backSpeed: 50,
                loop: true,
            });
        }, 1800);

        return () => {
            clearTimeout(timeoutId);
            if (typed) {
                typed.destroy();
            }
        };
    }, []);

    return (
        <section
            className="bg-Bg h-screen flex justify-between items-center"
            id="home"
        >
            <div className="home-content flex flex-col w-1/2 ">
                <div className="intro text-white animate__animated animate__fadeInLeft" style={{ margin: "0 0 0 10rem" }}>
                    <h3 className="font-varela leading-none tracking-tighter greet">
                        <span>H</span>
                        <span>i</span>
                        <span>,</span>
                        <br />
                        <span>I</span>
                        <span>'</span>
                        <span>m &nbsp;</span>
                        <span className="tracking-tighter"><h1 className="text-rose-500 M">M</h1></span>
                        <span className="tracking-tighter">u</span>
                        <span className="tracking-tighter">k</span>
                        <span className="tracking-tighter">e</span>
                        <span className="tracking-tighter">s</span>
                        <span className="tracking-tighter">h&nbsp;</span>
                        <span className="tracking-tighter">S</span>
                        <span className="tracking-tighter">k</span>

                    </h3>
                    <h3 className="font-varela mt-4 text-5xl">
                        And I'm<span className="ms-4 text-custom " ref={el}></span>
                    </h3>
                    <p className="mt-6 text-xl font-light font-raleway leading-8">
                        Currently an Under Graduate student in <br />
                        Sri Krishna College of Engineering and Technology
                    </p>
                </div>

                <div
                    className="social-links flex  animate__animated animate__fadeInLeft "
                    style={{ margin: "2.4rem 0 0 12rem" }}
                >
                    <div className="social-icon">
                        <a
                            className="flex justify-center items-center inline-block text-3xl text-white text-center"
                            href="https://www.facebook.com/mukeshsk.official"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <span className="text-xl font-bold">FaceBook</span>
                    </div>
                    <div className="social-icon">
                        <a
                            className="flex justify-center items-center inline-block text-3xl text-white text-center "
                            href="https://www.instagram.com/mukeshsk.official"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <span className="text-xl font-bold">Instagram</span>
                    </div>
                    <div className="social-icon">
                        <a
                            className="flex justify-center items-center inline-block text-3xl text-white text-center"
                            href="https://www.twitter.com/mukeshsk.official"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <span className="text-xl font-bold">Twitter</span>
                    </div>
                    <div className="social-icon">
                        <a
                            className="flex justify-center items-center inline-block text-3xl text-white text-center"
                            href="https://www.linkedin.com/in/mukeshsk.official"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <span className="text-xl font-bold">LinkedIn</span>
                    </div>
                    <div className="social-icon">
                        <a
                            className="flex justify-center items-center inline-block text-3xl text-white text-center"
                            href="https://www.github.com/mukeshsk.official"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <span className="text-xl font-bold">Github</span>
                    </div>
                </div>
                <div className=" animate__animated animate__fadeInUp" style={{ margin: "0 0 0 13rem" }}>
                    <button className="btn btn-slide w-60 mt-14  ms-16 p-3 ps-6 pe-6 font-semibold text-bold rounded-full  text-xl hover:border-black hover:text-black">
                        Download CV
                    </button>
                </div>
            </div>
            {/* <div className="w-1/2 text-white text-4xl " style={{margin:"0 auto" }}>
                <img
                    src='src\assets\test.jpg'
                    className="p-4"
                    alt="" 
                    width="450px"
                    height="400px"
                    style={{display: "block", margin: "0 auto"}}/>
            </div> */}
            <div className="w-1/2" style={{margin:"0 auto" }}>
                <div class="demo animate__animated animate__fadeInRight" >
                    <div class="box" style={{display: "block", margin: "0 auto"}}>
                        <div class="hover-point"></div>
                        <div class="hover-point"></div>
                        <div class="hover-point"></div>
                        <div class="hover-point"></div>
                        <div class="hover-point"></div>
                        <div class="hover-point"></div>
                        <div class="hover-point"></div>
                        <div class="hover-point"></div>
                        <div class="box-contents"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
{

}
