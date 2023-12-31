import { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Desription from "./Desription";

const AccordionItem = ({ sugdata ,key ,isOpen ,setshowindex}) => {

  
    const handleMenu = () => {
        setshowindex();
    };
  
    return (
      <div>
        {sugdata?.card?.card?.itemCards && (
          <div onClick={handleMenu} className="acheader" key={key}>
            <h3>{sugdata?.card?.card?.title }</h3>
            <p> {isOpen ? <MdKeyboardArrowUp className="arrow" /> : <MdOutlineKeyboardArrowDown className="arrow" />}</p>
          </div>
        )}
        <div>{isOpen && <Desription sugdata={sugdata} />}</div>
      </div>
    );
  };

  export default AccordionItem
  