import React from 'react';
import Pelicula from '../Pelicula';


const ListadoPeliculas = (props) => {
  return (
    <div className=' '>
      
      <h1 className='font-bold ml-5 py-4 text-xl capitalize text-white'>{props.nombre}</h1>
      <div className="flex overflow-x-auto ">
        {props.peliculas?.map((pelicula) => (
          <Pelicula
            key={pelicula.id}
            data={pelicula}
          />
        ))}
     
      </div>
    </div>
  )
};

export default ListadoPeliculas;
