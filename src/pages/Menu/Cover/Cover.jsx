
import MenuTitle from "../../../components/MenuTitle/MenuTitle";
import { Parallax } from "react-parallax";
const Cover = ({coverImg,title,description}) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={-200}
      className="mb-10"
    >
      <div
        className="hero h-[600px]"
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <MenuTitle
              header={title}
              description={description}
            ></MenuTitle>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
