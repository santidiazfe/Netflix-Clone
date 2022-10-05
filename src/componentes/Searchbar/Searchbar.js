import React from 'react'
import { Link } from 'react-router-dom'

const Searchbar = (props) => {
  return (
    <>
        <div className='flex items-center justify-center mb-4'>
          <button className='w-[15%] mt-7 pr-4 pl-8 h-12'>
            <Link
            to='/catalogo'>
              <i className="fa-solid  text-white  text-3xl md:text-5xl hover:text-red-700 fa-circle-arrow-left"></i>
            </Link>
        
          </button>
          <input className=" bg-zinc-700  mt-8 h-12 text-white font-semibold ml-10 w-[70%] md:w-[84%] md:mr-4 md:h-20 md:text-xl lg:h-20 lg:text-xl xl:h-20 xl:text-xl 2xl:h-20 2xl:text-xl "type="text" placeholder=' Busca tu pelicula'  onChange={e => {props.setValor(e.target.value)}} />
           
        </div>    
    </>
  )
}

export default Searchbar