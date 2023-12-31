import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MdStar } from "react-icons/md";
import { TbCurrencyRupee } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import useRestromenu from './util/useRestromenu';
const RestroMenu = () => {
  const [accData, setaccData] = useState([])

  const { resid } = useParams()
// hook
  const resinfo =useRestromenu(resid)


  const handleMenu = (index) => {
    const clickedData = [...accData];
    clickedData[index] = !clickedData[index];
    setaccData(clickedData);
  };



  if (resinfo.length < 1) {
    return <Shimmer />
  }

  const { name, cuisines, costForTwoMessage, areaName, totalRatingsString, avgRating, expectationNotifiers, sla } = resinfo?.cards?.[0]?.card?.card?.info || {};
  const datas = resinfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards

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
          <hr />
          <p className='total'>{totalRatingsString}</p>
        </div>
      </div>
      <p> <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${expectationNotifiers[0].icon.imageId}`} /> &nbsp;<span className='restrodistance'>{expectationNotifiers[0].text}</span></p>
      <hr className='hline' />
      <p className='min'>{sla.slaString} <span>{costForTwoMessage}</span></p>
      <p>Veg Only  <input type='checkbox' /></p>
      <div className='accordian'>
        {datas.map((sugdata,index) =>
          <div>
          {
            sugdata?.card?.card?.itemCards && (
            <div onClick={() => handleMenu(index)} className='acheader'>
              <h3>{sugdata?.card?.card?.title}</h3>
              <p>{accData[index] ? <MdKeyboardArrowUp className='arrow' /> : <MdOutlineKeyboardArrowDown className='arrow' />}</p>
            </div>
  )}
            {accData?.[index] && (
            <div>{sugdata?.card?.card?.itemCards?.map((res) =>
              <div key={res.id}>
                <div className='resminibody'>
                  <div>
                    <p>{res.card.info.name}</p>
                    <p className='infprice'><TbCurrencyRupee />&nbsp;{res.card.info.price / 100}</p>
                    <p className='infdesc'>{res.card.info.description}</p>
                  </div>
                  <div>
                    <img className='minimg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${res.card.info.imageId}`} />
                  </div>
                </div>
                <hr />
              </div>
            )}
            </div>
            )}


          </div>
        )}
      </div>
      <div className='accborder'>
      </div>
    </div>
  );
};

export default RestroMenu;
