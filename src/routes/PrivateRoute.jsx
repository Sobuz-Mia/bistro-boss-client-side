import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (user) {
    return children;
  }
  if (loading) {
    return (
      <div className="w-24 mx-auto flex items-center h-screen">
        <span className="loading loading-spinner text-secondary w-full"></span>
      </div>
    );
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
