/* eslint-disable jsx-a11y/alt-text */
import { Link, useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MdStar } from 'react-icons/md';
import useRestromenu from './util/useRestromenu';
import AccordionItem from './AccordianItem';
import { useContext, useState } from 'react';
import UserContext from './util/UserContext';



const RestroMenu = () => {
  const { resid } = useParams();
  const resinfo = useRestromenu(resid);


  const {username ,setuname}=useContext(UserContext)
  const [showindex, setshowindex] = useState(0)
  const [isOpen, setIsOpen] = useState();

  if (resinfo.length < 1) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, areaName, totalRatingsString, avgRating, expectationNotifiers, sla } =
    resinfo?.cards?.[0]?.card?.card?.info || {};
  const filterdatas = resinfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  const datas = filterdatas.filter((res) => res.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

  return (
    <div className="menu">
      <header className="restroheader">
        <div>
          <Link className="routing" to={'/'}>
            <span>Home &nbsp;/</span>
          </Link>
          <span className="active"> {name}</span>
        </div>
        <div><input placeholder='change name...' value={username} onChange={(e)=>{setuname(e.target.value)}}/> search</div>
        <div>Hello {username}</div>
      </header>
      <div className="resbody">
        <div>
          <p className="menuheader">{name}</p>
          <p className="cuisinesname">{cuisines && cuisines.join(' ,')}</p>
          <p className="areaname">{areaName}</p>
        </div>
        <div className="resrating">
          <p className="ratings">
            <MdStar />
            {avgRating}
          </p>
          <hr />
          <p className="total">{totalRatingsString}</p>
        </div>
      </div>
      <p>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${expectationNotifiers[0].icon.imageId}`}
        />
        &nbsp;<span className="restrodistance">{expectationNotifiers[0].text}</span>
      </p>
      <hr className="hline" />
      <p className="min">
        {sla.slaString} <span>{costForTwoMessage}</span>
      </p>
      <p>
        Veg Only <input type="checkbox" />
      </p>
      <div className="accordian">
        {datas.map((sugdata, index) => (
          <AccordionItem 
          key={index} 
          sugdata={sugdata} 
          isOpen={index===showindex}
          setshowindex={()=>setshowindex(index)}
          />
        ))}
      </div>
      <div className="accborder"></div>
    </div>
  );
};

export default RestroMenu;
