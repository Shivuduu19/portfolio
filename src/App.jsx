import shoppingCart from "./assets/shoppingCart.png";
import memoryGame from "./assets/memoryGame.png";
import cv from "./assets/cv.png";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* menu container */}
      {open && (
        <div className="container m-auto h-full w-full flex justify-center items-center absolute bg-black z-10">
          <button
            className="absolute right-5 top-5"
            onClick={() => setOpen(false)}
          >
            <IoMdClose />
          </button>
          <ul className="flex flex-col justify-between  md:gap-9 gap-3 ">
            <li className="text-2xl">
              <button onClick={() => setOpen(false)}>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-gray-500"
                >
                  Projects
                </a>
              </button>
            </li>
            <li className="text-2xl">
              <button onClick={() => setOpen(false)}>
                <a
                  href="#technologies"
                  className="text-gray-300 hover:text-gray-500"
                >
                  Technologies
                </a>
              </button>
            </li>
            <li className="text-2xl">
              <button onClick={() => setOpen(false)}>
                <a
                  href="#aboutme"
                  className="text-gray-300 hover:text-gray-500"
                >
                  About me
                </a>
              </button>
            </li>
          </ul>
        </div>
      )}
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center ">
            <h1 className="font-bold text-xl md:text-4xl lg:text-6xl  text-green-400">
              Shiva's portfolio
            </h1>
            <div className="  md:hidden">
              <button className="text-2xl" onClick={() => setOpen(true)}>
                <IoMenuOutline />
              </button>
            </div>
            <div className="hidden md:block">
              <ul className="flex justify-between  md:gap-9 gap-3 ">
                <li className="text-2xl">
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-gray-500"
                  >
                    Projects
                  </a>
                </li>
                <li className="text-2xl">
                  <a
                    href="#technologies"
                    className="text-gray-300 hover:text-gray-500"
                  >
                    Technologies
                  </a>
                </li>
                <li className="text-2xl">
                  <a
                    href="#aboutme"
                    className="text-gray-300 hover:text-gray-500"
                  >
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* intro section */}
        <section className="mx-auto">
          <div className="container m-auto mt-5 mb-9 px-4 py-10">
            <div>
              <h1 className="font-bold text-xl md:text-5xl text-center">
                Hiii... , I'm shiva kumar,
              </h1>
              <h1 className="font-bold  text-2xl md:text-5xl text-center clip mt-1">
                Front-end developer
              </h1>
              <p className="mx-auto text-center text-xl md:text-3xl mt-5 text-gray-400 w-2/4">
                I have 1 year of experience in creating and developing user
                interfaces and I'm seeking to apply and develop my skills
                further
              </p>
            </div>
          </div>
        </section>
        {/* projects section */}
        <section id="projects">
          <div className="container m-auto mb-9">
            <h1 className="text-2xl font-bold pl-3">Projects</h1>
            <div className="flex flex-col md:flex-row justify-center gap-7 mt-16">
              {/* project 1 */}
              <div className="md:w-1/3  border-blue-600 border rounded-md p-6">
                <img src={shoppingCart} />
                <h2 className="font-semibold text-lg mt-4">
                  fake shopping cart for shopping things in online
                </h2>
                <p className="text-lg mt-2 break-words">
                  Responsive page made with reactjs, redux,html5,css3,fakeAPI
                  and styled-components
                </p>
                <div className="mt-auto mb-2">
                  <div className="flex gap-4  justify-center mt-6 mb-2 ">
                    <button className="text-xs lg:text-lg clip from-white to-yellow-400 hover:from-yellow-500">
                      source code
                    </button>
                    <button className="text-xs bg-gradient-to-r from-red-300 to-green-500 rounded-md p-3 hover:from-red-500 ">
                      Live Preview
                    </button>
                  </div>
                </div>
              </div>
              {/* project 2 */}
              <div className="md:w-1/3 border-blue-600 border rounded-md p-6">
                <img src={memoryGame} />
                <h2 className="font-semibold text-lg mt-4">A memory game</h2>
                <p className="text-lg mt-2 break-words">
                  Made with :React,Pokemon API,styled-components and vite
                </p>
                <div className="flex gap-4 justify-center mt-5 mb-2">
                  <button className="text-xs lg:text-lg clip from-white to-yellow-400 hover:from-yellow-500">
                    source code
                  </button>
                  <button className="text-xs bg-gradient-to-r from-red-300 to-green-500 rounded-md p-3 hover:from-red-500 ">
                    Live Preview
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-7 mt-5">
              {/* project 3 */}
              <div className="md:w-1/3 border-blue-600 border rounded-md p-6">
                <img src={cv} />
                <h2 className="font-semibold text-lg mt-4">
                  CV Apllication with an example
                </h2>
                <p className="text-lg mt-2 break-words">
                  Responsive page made by React,uuid package,react-icons and
                  vite
                </p>
                <div className="flex gap-4 mt-5 justify-center">
                  <button className="text-xs lg:text-lg clip from-white to-yellow-400 hover:from-yellow-500">
                    source code
                  </button>
                  <button className="text-xs bg-gradient-to-r from-red-300 to-green-500 rounded-md p-3 hover:from-red-500 ">
                    Live Preview
                  </button>
                </div>
              </div>
              {/* project 4 */}
              <div className="md:w-1/3 border-blue-600 border rounded-md p-6">
                <img src={memoryGame} />
                <h2 className="font-semibold text-lg mt-4">
                  fake shopping cart for shopping things in online
                </h2>
                <p className="text-lg mt-2 break-words">
                  Responsive page made with reactjs, redux,html5,css3,fakeAPI
                  and styled-components
                </p>
                <div className="flex gap-4 mt-5 justify-center">
                  <button className="text-xs lg:text-lg clip from-white to-yellow-400 hover:from-yellow-500">
                    source code
                  </button>
                  <button className="text-xs bg-gradient-to-r from-red-300 to-green-500 rounded-md p-3 hover:from-red-500 ">
                    Live Preview
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-7 mt-5"></div>
          </div>
        </section>
        {/* technologies  */}
        <section id="technologies">
          <div className="container m-auto mb-9 ">
            <h2 className="text-2xl font-bold pl-3">Technologies</h2>
            <div className="mt-16 mb-9 px-4">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold px-5">HTML</h2>
                  <p className="text-xl text-gray-500">Advanced</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-slate-400 to-gray-700 mt-7 w-[75%] mx-5"></div>
              </div>
              {/* 2 */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold px-5">CSS</h2>
                  <p className="text-xl text-gray-500">Advanced</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-slate-400 to-gray-700 mt-7 w-[85%] mx-5"></div>
              </div>
              {/* 3 */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold px-5">JAVASCRIPT</h2>
                  <p className="text-xl text-gray-500">Advanced</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-slate-400 to-gray-700 mt-7 w-[70%] mx-5"></div>
              </div>
              {/* 4 */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold px-5">REACT</h2>
                  <p className="text-xl text-gray-500">Advanced</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-slate-400 to-gray-700 mt-7 w-[85%] mx-5"></div>
              </div>
              {/* 5 */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold px-5">TAILWINDCSS</h2>
                  <p className="text-xl text-gray-500">Advanced</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-slate-400 to-gray-700 mt-7 w-[65%] mx-5"></div>
              </div>
            </div>
          </div>
        </section>
        {/* about me */}

        <section id="aboutme">
          <div className="container m-auto mt-16">
            <h2 className="text-2xl font-bold pl-3 ">About me</h2>
            <p className="mt-16 mb-16 text-gray-400 text-xl md:text-2xl text-center">
              I got interested in front end development last year and learning
              since 1 year by building projects
            </p>
          </div>
        </section>
      </main>
      {/* footer */}
      <footer className="mt-9 bg-cyan-950 p-9">
        <div className="flex justify-between items-center mx-8">
          <p className="text-xl md:text-2xl ">copyright @ 2024</p>
          <div>
            <ul className="flex text-xl gap-3">
              <a href="">
                <li>
                  <FaGithub />
                </li>
              </a>
              <a href="">
                <li>
                  <CiLinkedin />
                </li>
              </a>
              <a href="">
                <li></li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
