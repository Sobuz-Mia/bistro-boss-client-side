import { Link } from "react-router-dom";
import MenuItem from "../../../../shared/MenuItem/MenuItem";

const MenuCategory = ({ item ,title}) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="border-0 border-b-4 border-black my-3 btn ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
