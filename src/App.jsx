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
      <main className="flex">
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
              <p className="text-center mt-5 text-gray-400 ">
                I have 1 year of experience in creating and developing user
                interfaces and I'm seeking to apply and develop my skills
                further
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
