import React from 'react'

const Desription = (props) => {
    console.log(props);
  return (
    <div>
    <div>{props.sugdata?.card?.card?.itemCards?.map((res) =>
        <div key={res.id}>
          <div className='resminibody'>
            <div>
              <p className='resheader'>{res.card.info.name}</p>
              <p className='infprice'>&nbsp;{res.card.info.price / 100}</p>
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
    </div>
  )
}

export default Desription
