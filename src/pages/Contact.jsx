import { NavBar, Footer } from "../components/Prods";

function Contact() {
  return (
    <>
      <div className="">
        <NavBar />
        <div className="w-full bg-[url('./assets/deepsea.jpg')] bg-cover bg-right-bottom">
          <div className="flex justify-between font-main py-44">
            <div className="w-full lg:w-11/12 xl:w-9/12 mx-auto bg-white py-10 flex flex-col lg:flex-row justify-between gap-4">
              <div className="w-full lg:w-7/12 px-3 lg:pl-8">
                <h1 className="text-4xl font-semibold mb-2 text-slate-800">
                  Office Contact & Locations
                </h1>
                <div className="h-1 w-36 bg-teal-800"></div>
                <div className="pt-10">
                  We value your input and appreciate your feedback. Whether you
                  have inquiries or suggestions, please feel free to connect
                  with us through any of the following channels. Additionally,
                  you can use the email form below to share your thoughts with
                  us.
                </div>

                <div className="pt-10 flex items-center text-teal-900 font-medium ">
                  <span className="material-symbols-rounded pr-2">call</span>
                  +233 (0) 53 007 4501 |<br className="md:hidden" /> +233 (0) 20
                  566 0070
                </div>
                <div className="pt-5 flex items-center text-teal-900 font-medium">
                  <span className="material-symbols-rounded pr-2">mail</span>
                  heroespac@gmail.com
                </div>
                <div className="pt-5 flex items-center text-teal-900 font-medium">
                  <span className="material-symbols-rounded pr-2">
                    location_on
                  </span>
                  EG-104-2590, SEKYEKROM |<br className="md:hidden" /> ACCRA -
                  KUMASI RD, EASTERN REGION
                </div>
              </div>
              <div className="w-full lg:w-4/12 flex flex-col px-3 lg:pr-8">
                <form action="#" className="space-y-8">
                  <div>
                    <label
                      name="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      name="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      name="message"
                      className="block mb-2 text-sm font-medium "
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 "
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white bg-amber-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
