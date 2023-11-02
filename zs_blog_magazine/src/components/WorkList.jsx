const WorkList = () => {
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4 ">
            <div className="mb-16 max-w-md items-start">
              <span className="text-green-600 font-bold">Work List</span>
              <h2 className="text-xl md:text-2xl font-bold">
                We provide the Perfect Solution to your business growth
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3  hover:bg-white p-16">
                <img className="w-16 h-16" src="images/Activity.png" alt="" />
                <h4 className="mb-4 text-2xl font-bold font-heading">
                  Grow Your Business
                </h4>
                <p className="text-black leading-loose">
                  We help identify the best ways to improve your business
                </p>
                <div className="py-4">
                  <button className="btn bg-white group hover:bg-orange-500 text-black hover:text-white py-2 px-4 rounded flex items-center">
                    Learn More
                    <img
                      className="w-8 h-6 ml-2 transition-transform transform group-hover:invert"
                      src="images/right-arrow.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 hover:bg-white p-16">
                <img className="w-16 h-16" src="images/Heart.png" alt="" />
                <h4 className="mb-4 text-2xl font-bold font-heading">
                  Improve brand loyalty
                </h4>
                <p className="text-black leading-loose">
                  We help identify the best ways to improve your business
                </p>
                <div className="py-4">
                  <button className="btn bg-white group hover:bg-orange-500 text-black hover:text-white py-2 px-4 rounded flex items-center">
                    Learn More
                    <img
                      className="w-8 h-6 ml-2 transition-transform transform group-hover:invert"
                      src="images/right-arrow.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3  hover:bg-white p-16">
                <img className="w-16 h-16" src="images/Work.png" alt="" />
                <h4 className="mb-4 text-2xl font-bold font-heading">
                  Improve Business Model
                </h4>
                <p className="text-black leading-loose">
                  We help identify the best ways to improve your business
                </p>
                <div className="py-4">
                  <button className="btn bg-white group hover:bg-orange-500 text-black hover:text-white py-2 px-4 rounded flex items-center">
                    Learn More
                    <img
                      className="w-8 h-6 ml-2 transition-transform transform group-hover:invert"
                      src="images/right-arrow.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkList;
