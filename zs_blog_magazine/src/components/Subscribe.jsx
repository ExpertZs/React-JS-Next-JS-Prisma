function Subscribe() {
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <span className="text-green-600 font-bold">SUBSCRIBE</span>
              <h2 className="mb-2 text-xl lg:text-2xl text-black font-bold font-heading">
                Subscribe to get the latest news about us
              </h2>
              <p className="mb-8 text-gray-400 leading-loose">
                Please drop your email below to get daily update about what we
                do
              </p>
              <form className="mx-auto" action="">
                <div className="max-w-md mx-auto flex flex-wrap items-center border rounded-lg border-3px border-black p-3">
                  <input
                    className="flex-grow py-3 px-4 mr-4 text-xs rounded leading-loose"
                    type="email"
                    placeholder="Enter Your Email Adress"
                  />
                  <button className="w-auto py-2 px-6 rounded-t-xl rounded-l-xl bg-orange-600 hover:bg-orange-400 text-white hover:text-gray-50 font-bold leading-loose transition duration-200">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
