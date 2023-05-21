import DynamicTitle from "../../../Utilities/DynamicTitle";
import Banner from "../Banner/Banner";
import CategoryTab from "../CategoryTab/CategoryTab";
import Info from "../Contact/Info";
import Gallery from "../Gallery/Gallery";
import Subscribe from "../Subscribe/Subscribe";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  // Dynamic Title:
  DynamicTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoryTab></CategoryTab>
      <Testimonial></Testimonial>
      <Info></Info>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
