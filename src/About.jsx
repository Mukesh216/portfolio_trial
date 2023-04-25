import React from 'react'
import 'animate.css';


export default function About() {
  return (
    <section className='bg-secondBg  about-sec h-full' id='about'   >
      <div className='text-white pt-24'>
        <div className='first-abt ps-12 w-full'>
          <div className="about-1 flex  flex-row-reverse  border-2 border-custom  animate__animated animate__fadeInDown">
            <div className='flex flex-col justify-center ps-8'>
              <h3 className="text-3xl font-bold mb-10 ">
                <span className=" text-custom px-10 text-7xl font-normal underline ">
                  About Me!
                </span>
              </h3>
              <p className="leading-8 ms-6 font-extralight w-[50%]">
                I'm a highly skilled individual with expertise in web development, web
                designing, competitive programming, and problem-solving. I have a deep
                understanding of web development and design, which allows me to create
                websites that are both aesthetically pleasing and highly functional.
              </p>
            </div>
            <img
              // src='https://images.pexels.com/photos/16211569/pexels-photo-16211569.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
              src='src\assets\pic.jpg'
              alt="about"
              className=" box-border p-2  border-r-2 border-custom"
              style={{
                height: "420px",
                width: "400px"
              }}
            />

          </div>
        </div>

        <div className='outer mx-auto flex relative justify-center items-center animate__animated animate__fadeInUp ' style={{ height: "500px" }}>
          <div className="second-abt-1 absolute p-8 w-[35%] bg-Bg " style={{ transform: "translate(-25% ,10%)", zIndex: "2", position: "relative" }}>
            <div >
              <h3 className='flex justify-end text-3xl mb-4 pe-8 '> <span className='text-Bg bg-custom p-3 rounded-r-2xl font-bold'>More about me <span className='text-red-600 font-bold'>!</span></span></h3>
              <p className='leading-8 '> <span className='ms-12'>My proficiency in competitive programming</span> and problem-solving enables
                me to tackle complex challenges with ease and come up with innovative
                solutions. I'm passionate about learning and staying up-to-date with
                the latest technologies and trends, which makes me a valuable asset to
                any team. I'm confident that my skills p-4 pt-8 pb-8 and experience will make a
                significant impact on any project I undertake.</p>
            </div>
          </div>
          <div className="second-abt-2 absolute " style={{ width: "600px", height: "350px", left: " 30%", top: "10%", transform: "translate(60% ,  0%)", zIndex: "1" }}>
            <img src="src\assets\land.jpg" alt="" style={{ opacity: "0.6" }} />
          </div>
        </div>

        <div className='mt-14'>
          <h1 className='text-center text-4xl font-extrabold mb-10 text-custom'>Expertised{" "}<span>Sides</span></h1>
          <div className="skills-container flex text-center w-full">

            <div className="skills pt-12 pb-12 rounded-3xl" style={{backgroundColor: "#151b28"}}>
              <i className="fa-solid fa-code mb-4 text-custom"></i>
              <h3 className='mb-2'>Web Development</h3>
              <p className='mb-2 p-6'>
                I have a deep understanding of web development and design, which allows
                me to create websites that are both aesthetically pleasing and highly
                functional.
              </p>
              <a href="btn" ><span className='bg-custom text-xl rounded-full p-1 text-black font-bold ps-3 pe-3 '>Read More</span></a>
            </div>

            <div className="skills pt-12 pb-12  rounded-3xl"style={{backgroundColor: "#151b28"}}>
              <i className="fa-solid fa-database mb-4 text-custom"></i>
              <h3 className=' mb-2'>Cloud Management</h3>
              <p className='mb-2 p-6'>
                I have a deep understanding of web development and design, which allows
                me to create websites that are both aesthetically pleasing and highly
                functional.
              </p>
              <a href="btn" ><span className='bg-custom text-xl rounded-full p-1 text-black font-bold ps-3 pe-3 mb-4'>Read More</span></a>
            </div>

            <div className="skills pt-12 pb-12 rounded-3xl" style={{backgroundColor: "#151b28"}}>
              <i className="fa-solid fa-paintbrush mb-4 text-custom"></i>
              <h3 className='mb-2'>Graphic Design</h3>
              <p className='mb-2 p-6'>
                I have a deep understanding of web development and design, which allows
                me to create websites that are both aesthetically pleasing and highly
                functional.
              </p>
              <a href="btn" ><span className='bg-custom text-xl rounded-full p-1 text-black font-bold ps-3 pe-3 mb-4'>Read More</span></a>
            </div>

            <div className="skills pt-12 pb-12 rounded-3xl" style={{backgroundColor: "#151b28"}}>
              <i className="fa-solid fa-chart-simple mb-4 text-custom"></i>
              <h3 className='mb-2'>Digital Marketing</h3>
              <p className='mb-2 p-6'>
                I have a deep understanding of web development and design, which allows
                me to create websites that are both aesthetically pleasing and highly
                functional.
              </p>
              <a href="btn" ><span className='bg-custom text-xl rounded-full p-1 text-black font-bold ps-3 pe-3 mb-4'>Read More</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
