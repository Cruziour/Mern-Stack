import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Cart = () => {
  const [isProceedingToPayment, setIsProceedingToPayment] = useState(false);
  const { cart, removeFromCart, addMore } = useContext(CartContext);
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedClick = () => {
    setIsProceedingToPayment(true);
  };

  return (
    <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-gray-500">Price: ${item.price}</p>
            </div>
            {/* Quantity  Section */}
            {!isProceedingToPayment && ( // Conditionally render quantity section
              <div className='flex gap-4 items-center'>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <p className="text-gray-500">{item.quantity}</p>
                <button 
                  onClick={() => addMore(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))
      )}
      <h3 className="text-xl font-bold mt-4">Total: ${calculateTotal()}</h3>
      <div className='bg-green-400 w-fit py-1 px-2 mt-4 mx-auto font-semibold rounded'>
      <Link 
          to={isProceedingToPayment ? '/' : 'payment'} 
          onClick={isProceedingToPayment ? () => setIsProceedingToPayment(false) : handleProceedClick}
        >
          {isProceedingToPayment ? 'Go back to Shopping' : 'Proceed to Payment'}
        </Link>
      </div>
    </div>
  );
};

export default Cart;
