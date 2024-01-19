import { useContext, useState } from "react";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from "react-router-dom";
import useStatus from "./util/useStatus";
import UserContext from "./util/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [logins, setlogins] = useState('LogIn')


const cart=useSelector((store)=>store.cartdata.items)
//select using the redux store  to reciee the data we use this approach


const  data=useContext(UserContext)

const status=useStatus()

  const handleLogin=()=>{
   logins==='LogIn'? setlogins('LogOut'):setlogins('LogIn')
  }
    return (
      <div className="nav-bar">
        <div className="logo-border">
         <Link to='/'>
         <img
         className="logo"
         src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZvb2R8ZW58MHx8MHx8fDA%3D"
       />
         </Link> 
          <h5>Apna Zomato</h5>
        </div>
        <div className="nav-items">
        <h1>
        {status===true ? '💚 ':'hear🏓 '}
        </h1>
          <ul className="items">
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <li>Career</li>
           <Link  to='/cart'><li><AiOutlineShoppingCart  />({cart.length})</li></Link> 
            <li>{data.username}</li>
            </ul>
            
            <button onClick={handleLogin} className="log">{logins}</button>
        </div>
      </div>
    );
  };

  export default Header;