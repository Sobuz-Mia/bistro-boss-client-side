import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from './../hooks/useAdmin';

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin,isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return (
      <div className="w-24 mx-auto flex items-center h-screen">
        <span className="loading loading-spinner text-secondary w-full"></span>
      </div>
    );
  }
  if(user && isAdmin){
    return children
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
