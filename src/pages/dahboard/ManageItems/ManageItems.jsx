import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/Section_title/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axios = useAxios();
  const handleDeleteUser = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/menus/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} item has been deleted`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="">
        <SectionTitle
          heading="Hurry Ups"
          subHeading="Manage All Items"
        ></SectionTitle>
      </div>
      <h2 className="text-3xl font-bold">Total Items: {menu.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-xl font-medium">
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item, index) => (
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
                  <Link to={`/dashboard/updateMenu/${item._id}`}>
                    <button className="bg-[#D1A054] p-4 rounded-lg btn text-xl text-white">
                      <FaEdit />
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteUser(item)}
                    className="text-xl bg-red-600 p-4 text-white rounded-lg btn"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
