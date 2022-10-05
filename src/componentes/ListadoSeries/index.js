import React from 'react';
import Serie from '../Serie';


const ListadoSeries = (props) => {

  return (
    <div >
      
      <h1 className='font-bold ml-5 py-4 text-xl capitalize text-white'>{props.nombre}</h1>
      <div className="flex overflow-x-auto">
        {props.series?.map((serie) => (
          <Serie
            data={serie}
          />
        ))}
      </div>
    </div>
  )
};

export default ListadoSeries;
