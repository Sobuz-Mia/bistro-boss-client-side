import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading,setLoading] = useState(true);
    const axios = useAxios();
  useEffect(() => {
    axios.get("/menus").then((data) => {
      setMenu(data.data)
      setLoading(false)
    });
  }, []);
    return [menu,loading];
};

export default useMenu;