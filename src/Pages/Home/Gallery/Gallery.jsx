import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="mt-16">
      <div>
        <hr className="w-1/4 mx-auto bg-cyan-800 h-1" />
        <h2 className="text-5xl font-bold text-center my-5">Photo Gallery</h2>
        <hr className="w-1/4 mx-auto bg-cyan-800 h-1" />
      </div>
      <Marquee speed={150} pauseOnHover={true}>
        <div className="carousel carousel-end rounded-box h-[500px]">
          <div className="carousel-item">
            <img src="https://i.postimg.cc/rpWPd90s/car1.jpg" alt="car" />
          </div>
          <div className="carousel-item">
            <img src="https://i.postimg.cc/tRDmVJT3/car7.jpg" alt="car" />
          </div>
          <div className="carousel-item">
            <img src="https://i.postimg.cc/j5bkyJPX/car3.jpg" alt="car" />
          </div>
          <div className="carousel-item">
            <img src="https://i.postimg.cc/jd536TwG/car4.jpg" alt="car" />
          </div>
          <div className="carousel-item">
            <img src="https://i.postimg.cc/rmNZjF9L/car5.jpg" alt="car" />
          </div>
          <div className="carousel-item">
            <img src="https://i.postimg.cc/d3QHxPWZ/car6.jpg" alt="car" />
          </div>
          <div className="carousel-item">
            <img src="https://i.postimg.cc/br6CXCMC/car2.jpg" alt="car" />
          </div>
          <div className="carousel-item">
            <img src="https://i.postimg.cc/02BWc47r/car8.jpg" alt="car" />
          </div>
          <div className="carousel-item">
            <img src="https://i.postimg.cc/44W6dBwG/car9.jpg" alt="car" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;
