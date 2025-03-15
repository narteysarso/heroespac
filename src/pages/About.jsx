import { NavBar, Footer, Prods } from "../components/Prods";

function About() {
  return (
    <>
      <div className="">
        <NavBar />
        <div className="w-screen font-main h-[35dvh] bg-[url('./assets/about-header.jpg')]  bg-cover bg-no-repeat bg-center flex">
          <div className="w-full h-full flex justify-center items-end pb-12 backdrop-brightness-50">
            <div className=" flex items-center justify-center">
              <div className="text-white font-main text-center">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl">About Us</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col-reverse xl:flex-row xl:justify-between font-main">
            <div className="bg-[url('./assets/water-bottle.jpg')] bg-center bg-cover w-full xl:w-2/5 h-[40vh] xl:h-[550px]"></div>
            <div className="w-11/12 mx-auto py-20 xl:w-3/5 xl:my-28 xl:mx-16 font-base leading-relaxed text-justify text-lg">
              <h1 className="text-4xl font-semibold mb-5 flex gap-2 text-teal-800">
                <p className="text-amber-500">WHO</p> Are We
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              minus eius, labore ullam aut quia suscipit facere itaque cumque
              aliquid, laboriosam eum enim! A harum earum laborum? Accusamus,
              culpa iure. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Fugiat, minus eius, labore ullam aut quia suscipit facere
              itaque cumque aliquid, laboriosam eum enim! A harum earum laborum?
              <br /> <br />
              Accusamus, culpa iure. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat, minus eius, labore ullam aut quia
              suscipit facere itaque cumque aliquid, laboriosam eum enim! A
              harum earum laborum? Accusamus, culpa iure. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Fugiat, minus eius, labore
              ullam aut quia suscipit facere itaque cumque aliquid, laboriosam
              eum enim! A harum earum laborum? Accusamus, culpa iure. <br />
            </div>
          </div>
        </div>

        <div className="w-full bg-[url('./assets/patternbg.jpg')] bg-center bg-cover">
          <div className="py-36 w-11/12 lg:w-10/12 mx-auto text-center">
            <div className="">
              <h1 className="text-4xl font-semibold mb-5 flex justify-center gap-2 text-teal-800 ">
                <p className="text-amber-500">OUR</p> Mission
              </h1>
              <div className="flex flex-col xl:flex-row xl:justify-between gap-14 mt-10 text-md">
                <div className=" w-full xl:w-1/3 flex flex-col gap-4">
                  <span className="material-symbols-rounded text-5xl text-slate-500">
                    water_drop
                  </span>
                  <h1 className="font-semibold text-xl">Purity</h1>
                  Driven by a passion for purity, HeroesPac is committed to
                  providing unparalleled water refinement solutions. Our mission
                  is to empower communities with access to crystal-clear water,
                  employing environmentally conscious practices that protect
                  natural resources and foster a healthier world.
                </div>
                <div className="w-full xl:w-1/3 flex flex-col gap-4">
                  <span className="material-symbols-rounded text-5xl text-slate-500">
                    wb_incandescent
                  </span>
                  <h1 className="font-semibold text-xl">Excellence</h1>
                  Dedicated to excellence, HeroesPac is on a mission to
                  revolutionize water purification. Our commitment is to
                  safeguard public health and the environment by consistently
                  delivering state-of-the-art water treatment solutions,
                  upholding the highest standards of integrity and
                  professionalism.
                </div>
                <div className="w-full xl:w-1/3 flex flex-col gap-4">
                  <span className="material-symbols-rounded text-5xl text-slate-500">
                    public
                  </span>
                  <h1 className="font-semibold text-xl">Access</h1>
                  Our mission is to provide sustainable water solutions through
                  advanced refinement technologies, ensuring access to clean,
                  safe, and pure water for communities worldwide. We are
                  committed to environmental responsibility, innovation, and
                  improving the quality of life for generations to come.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Prods />
        <Footer />
      </div>
    </>
  );
}

export default About;
