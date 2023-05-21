import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8">
        <div className="flex flex-wrap">
          <div className="w-full px-8 lg:w-1/2">
            <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading ">
                Fostering Trust and Collaboration at Zoomie Toys!
              </h2>
              <p className="my-8 text-justify leading-loose text-gray-500 ">
                At Zoomie Toys, we prioritize fostering trust and collaboration
                between our valued customers and vendors. We believe in creating
                a vibrant marketplace that promotes open communication,
                transparent transactions, and shared success. With our dedicated
                focus on building strong relationships, we aim to provide a
                seamless shopping experience for customers, while empowering
                vendors to showcase their quality products and reach a wider
                audience. Together, we can create a thriving community where
                trust, collaboration, and mutual growth thrive. Join us at
                Zoomie Toys and experience the power of strong customer-vendor
                relationships.
              </p>
              <div className="w-full md:w-1/3">
                <Link to="/blog">
                  {" "}
                  <button
                    type="button"
                    className="py-3 px-4  bg-slate-800  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded"
                  >
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-8 lg:w-1/2 ">
            <ul className="space-y-12">
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                    1
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold ">
                    Quality Product
                  </h3>
                  <p className="leading-loose text-gray-500 ">
                    Discover excellence in every detail with our meticulously
                    crafted, high-quality products that redefine standards``
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                    2
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold ">
                    Shipping and Returns
                  </h3>
                  <p className="leading-loose text-gray-500 ">
                    Enjoy seamless shipping and stress-free returns, making your
                    shopping experience convenient and worry-free from start to
                    finish.
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                    3
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold ">
                    Become a Seller
                  </h3>
                  <p className="leading-loose text-gray-500 ">
                    Unlock your entrepreneurial potential and join our vibrant
                    marketplace as a seller, showcasing your products to a
                    global audience.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
