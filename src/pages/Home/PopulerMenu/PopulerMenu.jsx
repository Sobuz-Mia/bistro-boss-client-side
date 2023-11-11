import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Section_title/SectionTitle";
import axios from "axios";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const PopulerMenu = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    axios("/menu.json").then((data) => {
      const popularMenu = data.data?.filter(
        (popular) => popular.category === "popular"
      );
      setPopular(popularMenu);
    });
  }, []);
  return (
    <div className="mb-8">
      <div>
        <SectionTitle
          heading="Check it out"
          subHeading="FROM OUR MENU"
        ></SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn text-xl font-medium text-center border-0 border-b-4 border-black">
          View full menu
        </button>
      </div>
    </div>
  );
};

export default PopulerMenu;
