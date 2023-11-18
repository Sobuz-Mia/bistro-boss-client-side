import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const name = data?.name;
    const photoUrl = data?.photo;
    try {
      const result = await createUser(email, password);
      console.log(result.user.email);
      await updateUser(name, photoUrl).then(() => {
        const userInfo = {
          name,
          email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your account created successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      });
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          text: "Already exist email/something wrong",
        });
      }
    }
  };
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left w-1/2 ">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
          <h2 className="text-5xl text-center p-4 font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-400">Its required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-400">Enter email</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "pattern" && (
                <span className="text-red-400">
                  password must be 6 characters,one upper case,one lower
                  case,one special characters
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="photo url"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-400">photo url is required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-[#DBB984]">Sign Up</button>
            </div>
            <p className="text-center text-2xl ">Or Login With</p>
            <SocialLogin/>
            <p className="text-center ">
              Already have an account?{" "}
              <Link to={"/login"} className="text-[#DBB984] font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
