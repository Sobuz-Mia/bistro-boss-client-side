
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axios = useAxios();
  //   const [menu, setMenu] = useState([]);
  //   const [loading,setLoading] = useState(true);
  //   const axios = useAxios();
  // useEffect(() => {
  //   axios.get("/menus").then((data) => {
  //     setMenu(data.data)
  //     setLoading(false)
  //   });
  // }, [axios]);
  const {data:menu=[],isPending:loading,refetch} = useQuery({
    queryKey:["menus"],
    queryFn:async()=>{
      const res = await axios.get('/menus')
      return res.data
    }
  })
    return [menu,loading,refetch];
};

export default useMenu;