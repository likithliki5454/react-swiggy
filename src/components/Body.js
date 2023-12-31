
import ResturantContainer from "./ResturantContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useStatus from "./util/useStatus";


const Body = () => {

  const [search, setSearch] = useState([]);
  const [initial, setinitial] = useState([])
  const [svalue, setsvalue] = useState([])


  useEffect(() => {
    fetchdata()
  }, [])


const status =useStatus()

  const fetchdata = async () => {
    var datafetched = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const response = await datafetched.json()
    setSearch(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setinitial(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

  const handleRatings = () => {
    var filtered = search.filter((data) => {
      return data.info.avgRating >= 4.5
    })
    setSearch(filtered)
  }

  const handleAllfood = () => {
    setSearch(initial)
  }

  const handleSearch = (e) => {
    const value = e.target.value;
    setsvalue(value)
  }

  const searchBtn=()=>{
    const filtersearch = initial.filter((item) => item.info.name.toLowerCase().includes(svalue.toLowerCase()));
    if(filtersearch.length<1){
      setSearch(initial)
    }
    else{
      setSearch(filtersearch)  
    }
  }

  if(status===false){
    return(
      <h1>looks like offline</h1>
    )
  }





  return search.length === 0 ? (
    <Shimmer/>
    ) : (
    <div className="body">
      <button onClick={handleRatings}>Top Resturats</button>
      <button onClick={handleAllfood}>All Foods</button>
      <input onChange={handleSearch} type="search" />
      <span> <button onClick={searchBtn}>Search</button> </span>
      <ResturantContainer data={search} />
    </div>
  );
};
export default Body;