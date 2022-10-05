import React from 'react'
import { Link } from 'react-router-dom'

const PeliculaBusqueda = (props) => {
  return (
    <div className='flex'>
      <Link
      to={`/pelicula/${props.data?.id}`}
      >
        <img
        src={`https://image.tmdb.org/t/p/original${props.data?.poster_path}`}
        className="h-20 md:h-44 md:w-56 w-30 min-w-[110px] rounded  px-1 hover:drop-shadow-2xl"
        alt="placeholder"
        />
      </Link>
      
      
      
    </div>
  )
}

export default PeliculaBusqueda