import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import { useLoaderData } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_API_KEY = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateMenu = () => {
  const axiosPublic = useAxiosPublic();
  const axios = useAxios();
  const { category, name, price, recipe, _id } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // image hosting to image bb
    const imageUrl = { image: data.photo[0] };
    const res = await axiosPublic.post(image_API_KEY, imageUrl, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data?.name,
        recipe: data?.details,
        category: data?.category,
        price: parseFloat(data?.price),
        image: res.data?.data?.display_url,
      };
      const resMenu = await axios.patch(`/menu/${_id}`, menuItem);
      if (resMenu.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} has been Updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">Update Item</h2>
      <div className="w-3/4 mx-auto bg-[#F3F3F3]">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              {...register("name")}
              defaultValue={name}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered"
                defaultValue={category}
              >
                <option value="default">Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price")}
                defaultValue={price}
                type="text"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("details")}
              defaultValue={recipe}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe details"
            ></textarea>
          </div>
          <input
            {...register("photo")}
            type="file"
            className="file-input w-full max-w-xs"
          />
          <br />
          <button className="btn bg-[#835D23] my-7 text-white">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMenu;
