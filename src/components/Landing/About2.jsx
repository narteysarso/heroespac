function About2() {
  return (
    <div className="bg-[url('./assets/blob2.svg')] bg-cover bg-center text-white">
      <div className="w-11/12 lg:w-10/12 xl:w-8/12 mx-auto py-48 text-center font-main">
        <h1 className="text-4xl font-semibold mb-10">
          Why choose Heroes Pac Mineral Water for your hydration needs?
        </h1>
        <div className="flex flex-col xl:flex-row justify-between gap-6">
          <div className="w-full xl:w-1/3 text-left text-lg backdrop-blur bg-white bg-opacity-25 p-5 rounded border-b border-b-blue-500">
            <div className="flex flex-col justify-start items-start gap-1 mb-5">
              <span className="material-symbols-rounded text-3xl  text-blue-500">
                editor_choice
              </span>
              <h1 className="text-2xl">QUALITY</h1>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quo
            possimus similique laborum quam quisquam minima voluptatem,
            perferendis dicta temporibus explicabo aliquam voluptas nemo, quia
            eaque. Perspiciatis impedit atque amet.
          </div>
          <div className="w-full xl:w-1/3 text-left text-lg backdrop-blur bg-white bg-opacity-25 p-5 rounded border-b border-b-amber-500">
            <div className="flex flex-col justify-start items-start gap-1 mb-5">
              <span className="material-symbols-rounded text-3xl  text-amber-500">
                verified_user
              </span>
              <h1 className="text-2xl">SAFETY</h1>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quo
            possimus similique laborum quam quisquam minima voluptatem,
            perferendis dicta temporibus explicabo aliquam voluptas nemo, quia
            eaque. Perspiciatis impedit atque amet.
          </div>
          <div className="w-full xl:w-1/3 text-left text-lg backdrop-blur bg-white bg-opacity-25 p-5 rounded border-b border-b-pink-500">
            <div className="flex flex-col justify-start items-start gap-1 mb-5">
              <span className="material-symbols-rounded text-3xl text-pink-500">
                universal_currency_alt
              </span>
              <h1 className="text-2xl">AFFORDABLE</h1>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quo
            possimus similique laborum quam quisquam minima voluptatem,
            perferendis dicta temporibus explicabo aliquam voluptas nemo, quia
            eaque. Perspiciatis impedit atque amet.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
