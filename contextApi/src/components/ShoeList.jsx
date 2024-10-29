import React, { useContext } from 'react';
import ShoeItem from './ShoeItem';

import Shoe1 from '../assets/shoe1.jpg';
import Shoe2 from '../assets/shoe2.jpg'
import Shoe3 from '../assets/shoe3.jpg'
import Shoe4 from '../assets/shoe4.jpg'
import Shoe5 from '../assets/shoe5.jpg'
import Shoe6 from '../assets/shoe6.jpg'

const shoes = [
  { id: 1, name: 'Running Shoes', price: 100, image: Shoe1 },
  { id: 2, name: 'Basketball Shoes', price: 150, image: Shoe2 },
  { id: 3, name: 'Casual Sneakers', price: 80, image: Shoe3 },
  { id: 4, name: 'Casual Sneakers', price: 201, image: Shoe4 },
  { id: 5, name: 'Basketball Shoes', price: 101, image: Shoe5 },
  { id: 6, name: 'Running Shoes', price: 151, image: Shoe6 },
];

const ShoeList = () => {

  return (
    <div className="w-full md:w-1/2 h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Available Shoes</h2>
      <div className='w-full flex flex-wrap justify-around gap-x-4 gap-y-6'>
        {shoes.map((shoe) => (
          <ShoeItem key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default ShoeList;
