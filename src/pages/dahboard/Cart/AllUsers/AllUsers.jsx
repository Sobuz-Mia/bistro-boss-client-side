import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/Section_title/SectionTitle";
import useAxios from "../../../../hooks/useAxios";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axios = useAxios();
  const { data: users, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axios.get("/users");
      return res.data;
    },
  });
  const handleDeleteUser = (user) => {
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
        axios.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} has been deleted`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleUserAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to update this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`/users/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${user.name}has been updated to Admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="mt-8">
        <SectionTitle heading="How Many??" subHeading="All Users" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-3">
          Total Users :{users?.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white font-semibold text-xl">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    {item?.role === "Admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleUserAdmin(item)}
                        className="bg-[#D1A054] p-4 rounded-lg btn text-xl text-white"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(item)}
                      className="text-xl bg-red-600 p-4 text-white rounded-lg btn"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
