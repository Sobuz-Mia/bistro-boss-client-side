import coverMenu from "../../../assets/menu/banner3.jpg";
import MenuTitle from "../../../components/MenuTitle/MenuTitle";
import { Parallax } from "react-parallax";
const Cover = () => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={coverMenu}
      bgImageAlt="the dog"
      strength={-200}
      className="mb-10"
    >
      <div
        className="hero h-[600px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <MenuTitle
              header="OUR MENU"
              description="Would you like to try a dish?"
            ></MenuTitle>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
