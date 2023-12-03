import { Link } from "react-router-dom";
import ResturantCard from "./ResuturantCard";
const ResturantContainer = ({ data }) => {
    return (
      <div className="container">
        {data.map((items) => (   
         <Link className="rcards" key={items.index}  to={"/RestroMenu/"+items.info.id}> <ResturantCard {...items} /></Link> 
        ))}
      </div>
    );
  };
  export default ResturantContainer;