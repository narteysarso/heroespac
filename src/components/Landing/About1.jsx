import { Link } from "react-router-dom";

function About1() {
  return (
    <div className="bg-[url('./assets/layer2.svg')] bg-cover bg-center text-gray-900">
      <div className="w-11/12 lg:w-9/12 xl:w-8/12 mx-auto py-48 text-justify lg:text-center font-main">
        <h1 className="text-4xl font-semibold mb-4 text-teal-800">OUR WATER</h1>
        <p className="text-lg xl:text-xl leading-loose">
          Welcome to Heroes Pac, where purity meets innovation in every drop.
          Our water is sourced from pristine natural springs, ensuring
          unparalleled freshness. Through advanced purification processes, we
          meticulously remove impurities, guaranteeing the highest quality and
          clarity. At Heroes Pac, sustainability is key – our eco-friendly
          practices reflect our commitment to both your well-being and the
          environment. Experience the purest hydration with us. Choose Heroes
          Pac for water that not only quenches your thirst but elevates your
          lifestyle. Cheers to the essence of clarity and health in every sip!
        </p>
        <div className="flex justify-left lg:justify-center items-center gap-6 mt-4">
          <Link to="about">
            <button className="bg-blue-700 px-5 py-3 text-md xl:text-lg text-white hover:bg-transparent hover:text-gray-900 border-2 border-transparent hover:border-blue-700">
              Read More
            </button>
          </Link>
          <Link to="contact">
            <button className="bg-blue-700 px-5 py-3 text-md xl:text-lg text-white hover:bg-transparent hover:text-gray-900 border-2 border-transparent hover:border-blue-700">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About1;
