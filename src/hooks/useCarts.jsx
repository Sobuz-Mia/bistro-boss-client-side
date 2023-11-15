import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCarts = () => {
    const axios = useAxios();
    const {user} = useAuth();
    const {data : carts = [],refetch} = useQuery({
        queryKey:['cartsItem',user?.email],
        queryFn: async ()=>{
            const res = await axios.get(`/carts?email=${user.email}`);
            return res.data
        }
    })
    return [carts,refetch]
};

export default useCarts;