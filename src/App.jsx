import shoppingCart from "./assets/shoppingCart.png";
import memoryGame from "./assets/memoryGame.png";
import cv from "./assets/cv.png";
function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center ">
            <h1 className="font-bold text-2xl text-green-400">
              Shiva's portfolio
            </h1>
            <div>
              <ul className="flex justify-between md:gap-5 gap-3 ">
                <li>
                  <a className="text-gray-300 hover:text-gray-500">Projects</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-500">
                    Technologies
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-500">About me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* intro section */}
        <section className="mx-auto">
          <div className="container m-auto px-4 py-10">
            <div>
              <h1 className="font-bold text-3xl text-center">
                Hiii... , I'm shiva kumar,
              </h1>
              <h1 className="font-bold text-3xl text-center clip mt-1">
                Front-end developer
              </h1>
              <p className="mx-auto text-center  mt-5 text-gray-400 w-2/4">
                I have 1 year of experience in creating and developing user
                interfaces and I'm seeking to apply and develop my skills
                further
              </p>
            </div>
          </div>
        </section>
        {/* projects section */}
        <section>
          <div className="container m-auto">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="flex justify-center gap-7 mt-5">
              {/* project 1 */}
              <div className="w-1/3  border-blue-600 border rounded-md p-6">
                <img src={shoppingCart} />
                <h2 className="font-semibold text-sm mt-4">
                  fake shopping cart for shopping things in online
                </h2>
                <p className="text-xs mt-2 break-words">
                  Responsive page made with reactjs, redux,html5,css3,fakeAPI
                  and styled-components
                </p>
                <div className="mt-auto mb-2">
                  <div className="flex gap-4  justify-center  mt-auto mb-2 ">
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
              <div className="w-1/3 border-blue-600 border rounded-md p-6">
                <img src={memoryGame} />
                <h2 className="font-semibold text-sm mt-4">A memory game</h2>
                <p className="text-xs mt-2 break-words">
                  Made with :React,Pokemon API,styled-components and vite
                </p>
                <div className="flex gap-4 justify-center mt-auto mb-2">
                  <button className="text-xs lg:text-lg clip from-white to-yellow-400 hover:from-yellow-500">
                    source code
                  </button>
                  <button className="text-xs bg-gradient-to-r from-red-300 to-green-500 rounded-md p-3 hover:from-red-500 ">
                    Live Preview
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-7 mt-5">
              {/* project 3 */}
              <div className="w-1/3 border-blue-600 border rounded-md p-6">
                <img src={cv} />
                <h2 className="font-semibold text-sm mt-4">
                  CV Apllication with an example
                </h2>
                <p className="text-xs mt-2 break-words">
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
              <div className="w-1/3 border-blue-600 border rounded-md p-6">
                <img src={memoryGame} />
                <h2 className="font-semibold text-sm mt-4">
                  fake shopping cart for shopping things in online
                </h2>
                <p className="text-xs mt-2 break-words">
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
        <section className="mt-10">
          <div className="container m-auto px-4">
            <h2 className="text-3xl font-bold">Technologies</h2>
            <div className="mt-7">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold px-5">HTML</h2>
                  <p className="text-2xl text-gray-500">Advanced</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-slate-400 to-gray-700 mt-7 w-[75%] mx-5"></div>
              </div>
              {/* 2 */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold px-5">CSS</h2>
                  <p className="text-2xl text-gray-500">Advanced</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-slate-400 to-gray-700 mt-7 w-[85%] mx-5"></div>
              </div>
              {/* 3 */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold px-5">JAVASCRIPT</h2>
                  <p className="text-2xl text-gray-500">Advanced</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-slate-400 to-gray-700 mt-7 w-[70%] mx-5"></div>
              </div>
              {/* 4 */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold px-5">REACT</h2>
                  <p className="text-2xl text-gray-500">Advanced</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-slate-400 to-gray-700 mt-7 w-[85%] mx-5"></div>
              </div>
              {/* 5 */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold px-5">TAILWINDCSS</h2>
                  <p className="text-2xl text-gray-500">Advanced</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-slate-400 to-gray-700 mt-7 w-[65%] mx-5"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
