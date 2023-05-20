import Banner from "../Banner/Banner";
import CategoryTab from "../CategoryTab/CategoryTab";
import Info from "../Contact/Info";
import Gallery from "../Gallery/Gallery";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoryTab></CategoryTab>
      <Info></Info>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
