import { useEffect, useState } from "react";

const useRestromenu = (resid) => {

    const [resinfo, setresinfo] = useState([]);

    useEffect(() => {
        fetchMenu();
      }, []);
    

    const fetchMenu = async () => {
        try {
          const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);
          const jsondata = await data.json();
          setresinfo(jsondata.data);
        } catch (error) {
          console.error('Error fetching menu:', error);
        }
      };
  return resinfo;
}

export default useRestromenu
