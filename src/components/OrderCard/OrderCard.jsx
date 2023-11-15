import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useCarts from './../../hooks/useCarts';

const OrderCard = ({ item }) => {
  const { name, recipe, image, price ,_id} = item;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxios();
  const [,refetch] = useCarts();

  // handle add to cart
  const handleAddToCard = () => {
    const addedCart = {
      name,
      image,
      price,
      userEmail : user?.email,
      _id
    }
    if (user && user?.email) {
      axios.post('/carts',addedCart)
      .then(res=>{
        if(res.data?.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} has been added to cart successfully`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
    } else {
      Swal.fire({
        title: "You are not login",
        text: "Please log in to add to cart!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from: location}})
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl my-5">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-stone-600 text-white absolute right-0 mr-5 mt-5 px-3 py-1 rounded-lg">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCard}
            className="btn btn-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
