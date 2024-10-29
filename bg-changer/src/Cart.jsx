import React from 'react'

const Cart = ({item}) => {
  return (
    <div className='w-48 max-h-48 h-48 bg-black border-2 rounded-2xl ... ring-2 ring-pink-500 ring-inset'>
      <div className='w-full flex h-28 justify-center items-center'>
        <img src={item.image} alt="" className='h-20 w-20' />
      </div>
      <h2 className='text-center'>{item.name}</h2>
    </div>
  )
}
 
export default Cart
