import React from 'react'
import { useState } from 'react'
 
const films = [
  {
    id: 1,
    Image:
      "https://media.istockphoto.com/id/90662293/photo/dracula-orchid.webp?a=1&b=1&s=612x612&w=0&k=20&c=uB2zCdUTx0hYmFkEtwo0KOpdU_LXKR1XPDuhW8L_NDQ=",
    title: "Dracular",
  },
  {
    id: 2,
    Image:
      "https://media.istockphoto.com/id/90662293/photo/dracula-orchid.webp?a=1&b=1&s=612x612&w=0&k=20&c=uB2zCdUTx0hYmFkEtwo0KOpdU_LXKR1XPDuhW8L_NDQ="
    ,
    title: "Dracular",
  },
  {
    id: 3,
    Image:
      "https://media.istockphoto.com/id/90662293/photo/dracula-orchid.webp?a=1&b=1&s=612x612&w=0&k=20&c=uB2zCdUTx0hYmFkEtwo0KOpdU_LXKR1XPDuhW8L_NDQ=",
    title: "Dracular",
  },
];


const Examplearray = () => {
    const [movies, setmovies] = useState([])

    if (movies.length === 0) {
         return(
            <div className='w-full max-w-[400px] mx-auto my-4 p-2.5 text-center  shadow-2xl'>
                <h1>NO MOVIES FOUND YET</h1>
                <button onClick={() => setmovies(films)}  className='mybtn'> get Movies</button>
            </div>
         )
    }
  return (
    <div>
        <h1 className='my-4 font-bold text-3xl'>Movies Avaliable</h1>
        <section className='flex gap-3'>
            {movies.map((movie) =>{
                return(
                    <div key={movie.id} className='w-full max-w-[300px]'>
                        <img src={movie.Image} alt="title" className='w-full object-cover h-[200px]' />
                        <p>{movie.title}</p>
                    </div>

                )
                    
                
            })}
        </section>
    </div>
    
  )
}

export default Examplearray