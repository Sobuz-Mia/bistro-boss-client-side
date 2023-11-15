import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/Section_title/SectionTitle";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const Cart = () => {
  const [carts, refetch] = useCarts();
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const axios = useAxios();
  const handleDeleteCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete this from cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/cart/item/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="my-8">
      <div>
        <SectionTitle heading="My Cart" subHeading="ADD MORE!!" />
      </div>
      <div className="flex justify-evenly items-center">
        <h2 className="text-3xl font-bold">Total Orders : {carts.length}</h2>
        <h2 className="text-3xl font-bold">Total Price : ${totalPrice} </h2>
        <button className="btn bg-[#D1A054] text-white">Pay</button>
      </div>
      <div className="overflow-x-auto ml-3 mt-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl bg-[#D1A054] text-white">
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {carts.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>$ {item?.price}</td>
                <th>
                  <button
                    className="btn btn-ghost text-xl"
                    onClick={() => handleDeleteCart(item._id)}
                  >
                    <FaTrashAlt className="text-red-600" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Cart;
