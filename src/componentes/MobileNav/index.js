import React from 'react'
import {Link} from 'react-router-dom'

const MobileNav = () => {
  return (
    <>
    <div className='fixed bottom-14 '>
        <div className='flex h-16 fixed w-full pt-2 text-white items-center text-xl justify-evenly bg-zinc-800 md:hidden lg:hidden xl:hidden 2xl:hidden'>
          <Link
          to='/catalogo'>
            <button className='flex flex-col '>
              <i className="fa-solid fa-house"></i>
              <h4 className='text-[12px]'>Home</h4>
            </button>
          </Link> 
          <Link
          to='/busqueda'>
            <button className='flex flex-col '>
              <i className="fa-solid fa-magnifying-glass"></i>
              <h4 className='text-[12px]'>Search</h4>
            </button>
          </Link>
          <button className='flex flex-col '>
            <i className="fa-solid fa-film"></i>
            <h4 className='text-[12px]'>Coming Soon</h4>
          </button> 
          <button className='flex flex-col '>
            <i className="fa-solid fa-download"></i>
            <h4 className='text-[12px]'>Downloads</h4>
          </button>
          <button className='flex flex-col '>
            <i className="fa-solid fa-bars"></i>
            <h4 className='text-[12px]'>More</h4>
          </button>
        </div>
      </div>
     
    </>
  )
}

export default MobileNav