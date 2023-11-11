import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import PopulerMenu from "../../Home/PopulerMenu/PopulerMenu";


const Menus = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover/>
      <PopulerMenu/>
    </div>
  );
};

export default Menus;
