import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import coverMenu from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/Section_title/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../Cover/MenuCaregory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";


const Menus = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        coverImg={coverMenu}
        title="OUR MENU"
        description="Would you like to try a dish?"
      />
      <SectionTitle heading="Don't miss" subHeading="TODAY'S OFFER" />
      <MenuCategory item={offered} />
      <Cover
        coverImg={dessertImg}
        title="DESSERTS"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"
      />
      <MenuCategory item={desserts} title="dessert" />
      <Cover
        coverImg={pizzaImg}
        title="PIZZA"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"
      />
      <MenuCategory item={pizzas} title="pizza" />
      <Cover
        coverImg={saladImg}
        title="SALADS"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"
      />
      <MenuCategory item={salads} title="salad"/>
      <Cover
        coverImg={soupImg}
        title="SOUPS"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"
      />
      <MenuCategory item={soups} title="dessert"/>
    </div>
  );
};

export default Menus;
