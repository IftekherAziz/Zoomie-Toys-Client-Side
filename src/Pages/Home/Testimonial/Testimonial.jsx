import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="my-10 mx-auto max-w-7xl px-10">
      <div
        className="hero min-h-[450px]"
        style={{
          backgroundImage: `url("https://i.ibb.co/6s63L9J/ruvim-noga-fyo-Gx76-Cm7-E-unsplash.jpg")`,

          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <div className="flex items-center justify-center px-5 py-5">
              <div className="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg">
                <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                  <a className="relative block">
                    <img
                      alt="profil"
                      data-aos="zoom-in"
                      src="https://www.tailwind-kit.com/images/person/1.jpg"
                      className="mx-auto object-cover rounded-full h-20 w-20 "
                    />
                  </a>
                  <h3 className="pt-5 text-2xl font-bold">Message From CEO</h3>
                </div>
                <div className="w-full mb-10">
                  <div className="h-3 text-3xl leading-tight text-left text-indigo-500">
                    “
                  </div>
                  <p className="px-5 text-sm text-center text-gray-600 ">
                    To all our valued customers and sellers, thank you for
                    choosing Zoomie Toys, where imagination and play come alive!
                    Explore our wide range of sports cars, regular cars, and
                    truck toys. Happy shopping!
                  </p>
                  <div className="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                    ”
                  </div>
                </div>
                <div className="w-full">
                  <p className="font-bold text-center text-indigo-500 text-md">
                    Iftekher Aziz
                  </p>
                  <p className="text-xs text-center text-gray-500 ">
                    @Iftekheraziz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
