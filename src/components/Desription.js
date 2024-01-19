import React from 'react'
import { useDispatch } from 'react-redux'
import { addtocart } from './util/redux/cartSlice'

const Desription = (props) => {

  const dispatch = useDispatch()

  const handleadditem = (data) => {
    //dispatch the action in redux
    dispatch(addtocart(data))
  }

  const data=props.sugdata?.card?.card?.itemCards
  return (
    <div>
      <div>{data?.map((res) =>
        <div key={res.id}>
          <div className='resminibody'>
            <div>
              <p className='resheader'>{res.card.info.name}</p>
              <p className='infprice'>&nbsp;{res.card.info.price / 100}</p>
              <p className='infdesc'>{res.card.info.description}</p>
            </div>
            <div>
              <button onClick={()=>handleadditem(res.card.info)} className='add-cart-btn'>ADD +</button>
              <img className='minimg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${res.card.info.imageId}`} />
            </div>
          </div>
          <hr />
        </div>
      )}
      </div>
    </div>
  )
}

export default Desription
