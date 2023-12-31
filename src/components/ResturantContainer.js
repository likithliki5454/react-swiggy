import { Link } from "react-router-dom";
import ResturantCard ,{Hofrestro}from "./ResuturantCard";
const ResturantContainer = ({ data }) => {

  const Hodresult= Hofrestro(ResturantCard)
    return (
      <div className="container">
        {data.map((items) => (   
         <Link className="rcards" key={items.index}  to={"/RestroMenu/"+items.info.id}>
          {
            items.info.isOpen ? (<Hodresult {...items}/>)
:(<ResturantCard {...items} />)
          }
          </Link> 
        ))}
      </div>
    );
  };
  export default ResturantContainer;