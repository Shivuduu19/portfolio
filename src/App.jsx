import shoppingCart from "./assets/shoppingCart.png";

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
              <div className="w-1/3 border-blue-600 border rounded-md p-6">
                <img src={shoppingCart} />
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
              <div className="w-1/3 border-blue-600 border rounded-md p-6">
                <img src={shoppingCart} />
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
            <div className="flex justify-center gap-7 mt-5">
              <div className="w-1/3 border-blue-600 border rounded-md p-6">
                <img src={shoppingCart} />
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
              <div className="w-1/3 border-blue-600 border rounded-md p-6">
                <img src={shoppingCart} />
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
            <div className="flex justify-center gap-7 mt-5">
              <div className="w-1/3 border-blue-600 border rounded-md p-6">
                <img src={shoppingCart} />
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
              <div className="w-1/3 border-blue-600 border rounded-md p-6">
                <img src={shoppingCart} />
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
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
