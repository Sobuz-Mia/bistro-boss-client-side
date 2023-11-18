import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axios = useAxios();
  const {user} = useAuth();
  const {data:isAdmin,isPending:isAdminLoading} = useQuery({
    queryKey:['isAdmin'],
    queryFn:async()=>{
        const res = await axios.get(`/users/admin?email=${user.email}`)
        return res.data.admin;
    }
  })
  return [isAdmin,isAdminLoading]
};

export default useAdmin;