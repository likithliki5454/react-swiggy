import { AiFillStar } from "react-icons/ai";
const ResturantCard = (props) => {
    return (
      <div className="card">
      
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.info.cloudinaryImageId}`} />
        <div className="card-info">
          <h2>
            {props.info.name}
          </h2>
          <h3>{props.info.cuisines.slice(0, 3).join(', ')}</h3>
          <p>Arrivat time in {props.info.sla.deliveryTime} &nbsp;mins</p>
          <p>{props.info.areaName}</p>
          <div className="rating">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            {props.info.avgRating}
          </div>
        </div>
      </div>
    );
  };



 export const Hofrestro=(ResturantCard)=>{
  return(props)=>(
    <div>
    <label >opened</label>
    <ResturantCard {...props}/>
    </div>
  )

 }
 export default ResturantCard;
