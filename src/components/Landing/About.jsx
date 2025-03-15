import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full bg-slate-50">
      <div className="backdrop-blur-3xl h-full py-32 md:py-40 xl:py-48 ">
        <div className="w-full xl:w-9/12 mx-auto ">
          <div className="flex flex-col-reverse xl:flex-row items-center justify-center gap-10 w-full h-fit">
            <div className="bg-[url('./assets/waterfall.jpg')] bg-center bg-cover w-full xl:w-2/5 h-[435px]"></div>
            <div className="leading-7 text-lg w-11/12 xl:w-3/5">
              <h1 className="text-4xl font-semibold mb-5 text-teal-800">
                HEROES PAC
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
              <Link to="about">
                <button className=" border-2 border-transparent hover:bg-transparent hover:border-amber-500 hover:text-gray-900 py-2 px-4  mt-5 bg-amber-500 text-white transition-colors duration-150 ease-in-out">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
