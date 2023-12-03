import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MdStar  } from "react-icons/md";
import { TbCurrencyRupee  } from "react-icons/tb";
const RestroMenu = () => {
  const [resinfo, setresinfo] = useState([]);
  const [recom, setrecom] = useState([])
  
  const {resid}=useParams()

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      // debugger
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);
      const jsondata = await data.json();
      setresinfo(jsondata.data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  if(resinfo.length<1){
    return <Shimmer/>
  }

  const { name, cuisines, costForTwoMessage ,areaName,totalRatingsString, avgRating , expectationNotifiers,sla } = resinfo?.cards?.[0]?.card?.card?.info || {};

  const recomendedData   = resinfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
// console.log(recomendedData);
  const datas=resinfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards

  return (
    <div className='menu'>
    <header className='restroheader'>
    <div>
        <Link className='routing' to={'/'}><span>Home  &nbsp;/</span></Link><span className='active'> {name}</span>
    </div>
    <div>
    search</div>
    </header>
    <div className='resbody'>
    <div>
      <p className='menuheader'>{name}</p>
      <p className='cuisinesname'>{cuisines && cuisines.join(' ,')}</p>
      <p className='areaname'>{areaName}</p>
      </div>
    <div className='resrating'>
    <p className='ratings'><MdStar />{avgRating}</p>
    <hr/>
    <p className='total'>{totalRatingsString}</p>
    </div>
    </div>
    <p> <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${expectationNotifiers[0].icon.imageId}`}/> &nbsp;<span className='restrodistance'>{expectationNotifiers[0].text}</span></p>
    <hr className='hline'/>
     <p className='min'>{sla.slaString} <span>{costForTwoMessage}</span></p>
    <p>Veg Only  <input type='checkbox'/></p>
    














    
    <h3>{resinfo && resinfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title}</h3>
    {
      recomendedData && recomendedData.map((list) =>
        <div key={list.card.info.id}>
        <div className='resminibody'>
        <div>
        <p>{list.card.info.name}</p>
        <p><TbCurrencyRupee/>&nbsp;{list.card.info.price/100}</p>
        <p>{list.card.info.description}</p>
        </div>
        <div>
        <img className='minimg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${list.card.info.imageId}`}/>
        </div>
        </div>
        <hr/>
    {    console.log(list)}
        </div>
      )
    }

    <p>okay maccha</p>
    </div>

  
    
  );
};

export default RestroMenu;
