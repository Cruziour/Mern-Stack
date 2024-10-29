import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const ShoeItem = ({ shoe }) => {
  const {addToCart} = useContext(CartContext)
  return (
    <div className="border p-4 mb-4 rounded bg-white shadow-md  w-1/3 h-96">
      <div>
      <img src={shoe.image} alt={shoe.name} className="w-full h-56 mr-4" />
      </div>
      <div className='flex justify-center mt-4'>
      <div>
        <div className="flex-1 m-auto">
          <h3 className="text-lg font-semibold">{shoe.name}</h3>
          <p className="text-gray-500">Price: ${shoe.price}</p>
        </div>
        <button
          onClick={() => addToCart(shoe)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeItem;
