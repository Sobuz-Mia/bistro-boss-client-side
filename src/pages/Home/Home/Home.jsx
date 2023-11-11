import Banner from "../Banner/Banner";
import Cetegory from "../Cetegory/Cetegory";
import Featured from "../Featured/Featured";

import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cetegory />
      <PopulerMenu />
      <Featured/>
      <Testimonials/>
    </div>
  );
};

export default Home;
