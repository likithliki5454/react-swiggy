
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { clearcart, removeitem } from './util/redux/cartSlice'


const Cart = () => {

const dispatch=useDispatch()



  const cartlist =useSelector((store)=>store.cartdata.items)


const handleclear=()=>{
dispatch(clearcart())
}


const handleremove=(item)=>{
  dispatch(removeitem(item))
}
  return (
 
    <div className='container'>
    {cartlist.length<1?<p>Cart is empty</p>:
    <div>{cartlist?.map((res) =>
      <div key={res.id}>
      <button onClick={()=>handleremove(res)}>remove</button>
        <div className='resminibody'>
          <div>
            <p className='resheader'>{res.name}</p>
            <p className='infprice'>&nbsp;{res.price / 100}</p>
            <p className='infdesc'>{res.description}</p>
          </div>
          <div>
     
          <img className='minimg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${res.imageId}`} />
          </div>
        </div>
        <hr />
      </div>
    )}
    </div>
  }
    {cartlist.length<1?'':<button onClick={handleclear} className='clearcart'>clear cart</button>}
    </div>
  )
}

export default Cart


// <img className='minimg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${res.card.info.imageId}`} />
   