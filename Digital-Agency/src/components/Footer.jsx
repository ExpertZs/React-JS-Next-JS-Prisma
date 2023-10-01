const Footer = () => {
  return (
    <>
      <section>
        <div className="py-20 bg-black radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
                <h1 className="text-white text-5xl font-bold"> WEB LOGO</h1>
                <p className="mb-4 max-w-sm text-white leading-loose">
                  Some footer text about the Agency. Just a little description
                  to help people understand you better
                </p>
                <div>
                  <a
                    className="inline-block w-10 mr-2 p-2 bg-green-700 hover:bg-green-500 rounded-full"
                    href="#"
                  >
                    <img
                      className="mx-auto"
                      src="atis-assets/social/facebook.svg"
                    />
                  </a>
                  <a
                    className="inline-block w-10 mr-2 p-2 bg-green-700 hover:bg-green-500 rounded-full"
                    href="#"
                  >
                    <img
                      className="mx-auto"
                      src="atis-assets/social/twitter.svg"
                    />
                  </a>
                  <a
                    className="inline-block mr-2 w-10 p-2 bg-green-700 hover:bg-green-500 rounded-full"
                    href="#"
                  >
                    <img className="mx-auto" src="images/Group 34.svg" />
                  </a>
                  <a
                    className="inline-block w-10 p-2 bg-green-700 hover:bg-green-500 rounded-full"
                    href="#"
                  >
                    <img
                      className="mx-auto"
                      src="atis-assets/social/instagram.svg"
                    />
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                  <h3 className="mb-6 text-2xl text-white font-bold">
                    Quick Links
                  </h3>
                  <ul>
                    <li className="mb-4">
                      <a className="text-white hover:text-gray-600" href="#">
                        Services
                      </a>
                    </li>
                    <li className="mb-4">
                      <a className="text-white hover:text-gray-600" href="#">
                        Portfolio
                      </a>
                    </li>
                    <li className="mb-4">
                      <a className="text-white hover:text-gray-600" href="#">
                        About Us
                      </a>
                    </li>

                    <li>
                      <a className="text-white hover:text-gray-600" href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-full md:w-1/3 lg:w-auto">
                  <h3 className="mb-6 text-2xl text-white font-bold">
                    Address
                  </h3>
                  <p className="text-white">
                    Design Agency Head Office. Airport Road United Arab Emirate
                  </p>
                </div>
              </div>
            </div>
            <p className="lg:text-center text-sm text-white border-t border-gray-100 pt-12 mt-16">
              Copyright Design Agency 2022
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
