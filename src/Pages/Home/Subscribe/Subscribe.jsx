/* eslint-disable react/no-unescaped-entities */
const Subscribe = () => {
  return (
    <div className="border rounded-xl mx-10 mt-5 mb-20">
      <div
        className="hero min-h-[420px]"
        style={{
          backgroundImage: `url("https://i.ibb.co/rQGSsBS/alex-zabavsky-WCQKa-C2ffjs-unsplash.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              We've got more coming...
            </h1>
            <p className="mb-5">
              Want to hear from us when we add new toys? Sign up for our
              newsletter and we'll email you every time we release a new toy.
            </p>

            <div className="flex justify-center">
              <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className=" relative ">
                  <input
                    type="text"
                    className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
                <button
                  className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-700 rounded"
                  type="button"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
