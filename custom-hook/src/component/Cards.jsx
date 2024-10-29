import React from 'react'
import { useFetch } from '../hooks/useFetch'
import './Card.css'


const Cards = () => {
    const { data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/photos')

    if (loading) return (
        <div className='w-full h-screen bg-black text-white flex items-center justify-center'>
            <p>Loading...</p>
        </div>
    )
    if (error) return (
        <div className='w-full h-screen bg-black text-white flex items-center justify-center'>
           <p>Error: {error}</p>
        </div>
    )
    return (
        <>
        <h2 className='text-white text-center bg-black text-2xl'>Photos</h2>
        <div className="photo-gallery bg-black">
            
          {data && data.map(photo => (
            <div key={photo.id} className="photo-item bg-black">
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
        </>
    );
}

export default Cards
