import Cart from "./Cart"
import Logo from './assets/Logo.jpg'
import Shoe1 from './assets/shoe1.jpg'
import Shoe2 from './assets/shoe2.jpg'
import Shoe3 from './assets/shoe3.jpg'
import Shoe4 from './assets/shoe4.jpg'
import Shoe5 from './assets/shoe5.jpg'
import Shoe6 from './assets/shoe6.jpg'


function App() {

  const item = [
    { id: 1, name:'Shoe - 1', image: Shoe1 },
    { id: 2, name:'Shoe - 2', image: Shoe2 },
    { id: 3, name:'Shoe - 3', image: Shoe3 },
    { id: 4, name:'Shoe - 4', image: Shoe4 },
    { id: 5, name:'Shoe - 5', image: Logo },
    { id: 6, name:'Shoe - 6', image: Shoe6 },
  ]

  return (
    <>
    <div className="w-full h-screen bg-black text-white flex-1 justify-center items-center">
      <div>
        <h1 className='text-xl font-bold text-center py-20'>Bg-Changer</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-1/2 flex justify-center flex-wrap gap-10">
        {item.map((item) => (
          <Cart key={item.id} item={item}/>
        ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App






