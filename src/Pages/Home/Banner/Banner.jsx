import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Buy Latest Kids Cars Toys
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Explore our collection of the latest kids cars toys, perfect for
                endless hours of fun and imagination.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://i.ibb.co/28k5dL4/car-toys1.png"
                            alt="Image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.ibb.co/F8t91DX/car-tory-1.png"
                            alt="Image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.ibb.co/MPPtypz/car-tory-2.png"
                            alt="Image"
                            className="h-full md:hidden lg:hidden w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.ibb.co/MVYCZPg/car-tory-3.png"
                            alt="Image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.ibb.co/bmfS6W9/car-tory-4.png"
                            alt="Image"
                            className="h-full w-full md:hidden lg:hidden object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.ibb.co/6R0YFWf/car-tory-5.png"
                            alt="Image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.ibb.co/tZ3C2PZ/car-tory-6.png"
                            alt="Image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/alltoys"
                  className="inline-block rounded-md border border-transparent bg-slate-900 px-8 py-3 text-center font-medium text-white"
                >
                  Browse Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
