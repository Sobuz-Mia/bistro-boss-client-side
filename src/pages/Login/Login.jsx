import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const Login = () => {
  // const captchaRef = useRef(null);
  const navigate = useNavigate();
  // const [disable, setDisable] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {loggedIn} = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    const email = data?.email;
    const password = data?.password;
    loggedIn(email,password)
    .then(res=>{
      if(res.user){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User log in successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
      navigate('/')
    })
    .catch((error) => {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...Sorry",
          text: "Invalid email / password!",
        });
      }
    });
  };
  // const handleCaptcha = () => {
  //   const value = captchaRef.current.value;
  //   if (validateCaptcha(value) == true) {
  //     setDisable(false);
  //   }
  // };
  
  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="text-center lg:text-left w-1/2 ">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
          <h2 className="text-5xl text-center p-4 font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              {errors.password && (
                <span className="text-red-400">Enter email</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-400">Enter correct password</span>
              )}
            </div>
            {/* <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                placeholder="Enter captcha"
                className="input input-bordered"
                {...register("captcha", { required: true })}
              />
              {errors.captcha && (
                <span className="text-red-400">
                  Fill up the field with captcha and click validate button
                </span>
              )}
              <button onClick={handleCaptcha} className="btn btn-ghost mt-3">
                Validate captcha
              </button>
            </div> */}
            <div className="form-control mt-6">
              <button
                // disabled={disable}
                className="btn text-white bg-[#DBB984]"
              >
                Sign in
              </button>
            </div>
            <p className="text-center ">
              New here?{" "}
              <Link to={"/register"} className="text-[#DBB984] font-bold">
                Create a New Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
