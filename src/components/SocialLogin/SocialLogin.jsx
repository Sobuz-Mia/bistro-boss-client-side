import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { loggedInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleGoogleLogin = () => {
    loggedInWithGoogle().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "user log in successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
      });
    });
  };
  return (
    <div>
      <button className="btn btn-outline w-full" onClick={handleGoogleLogin}>
        <FaGoogle className="text-red-500" /> Google
      </button>
    </div>
  );
};

export default SocialLogin;
