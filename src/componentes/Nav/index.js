import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css';

const Nav = () => {

  const clickMenu = (e) => {
    e.preventDefault();
    const nav = document.querySelector('#nav');
    const explorar = document.querySelector('#explorar')
    if(nav.classList.contains('mobile')){
      nav.classList.remove('mobile')
      
    } else {
      nav.classList.add('mobile')
    }
  }

  return (
    <>
        <div className='  bg-transparent h-[100px] 2xl:h-[150px] w-full absolute bg-gradient-to-t from-transparent to-black'></div> 

           {/* --- Desktop Nav --- */}

          <div 
            className=' mobile md:flex h-[70px] fixed w-full flex  items-center opacity-100 text-white text-xl pt-4 lg:justify-evenly'
            >
              <Link
              to={'/Selector'}>

              <img 
              className='h-[70px] w-[150px]  2xl:h-[150px] '
              src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt="" />
              </Link>
              <div className='flex justify-start mr-80'>

              <Link
                to={'/catalogo'}>
                <button className='pl-4'>
                  Inicio
                </button>
              </Link> 
              <Link
                  to={'/series'}>   
                <button  className='pl-4'>
                  Series
                </button>
              </Link>
              <Link
                to={'/movies'}>
                  <button  className='pl-4'>
                    Peliculas
                  </button>
              </Link>  
                <button  className='pl-4'>
                  Mi Lista
                </button>
                </div>
                <Link
                  to='/busqueda'>
                  <button>
                    <i className="fa-solid  ml-44 text-xl fa-magnifying-glass"></i>
                  </button>
                </Link>
    
            </div>

        {/* --- Burguer Nav --- */}

          <div 
            className='md:hidden h-[60px] fixed w-full flex  items-center bg-gradient-to-t from-transparent to-zinc-900 text-white text-[16px]  pt-2 lg:justify-around 2xl:h-[150px] 2xl:mt-[50px] 2xl:justify-evenly '
            >
              <div className='flex items-center md:justify-evenly pl-6 w-[75%]'>
                <Link
                to={'/Selector'}>

                  <img 
                  className='h-[62px] w-[41]  2xl:h-[150px] '
                  src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'  alt="" />
                </Link>

                    <button className='md:hidden text-lg pl-8 flex font-semibold justify-center items-center '
                          onClick={clickMenu}
                          id='explorar'>
                      <p>Explorar</p>
                      <i className="fa-solid fa-caret-down pl-2 text-xl"></i>
                    </button>
                  <div className=' flex flex-col md:flex-row'>
                    <div className='absolute left-28 pl-2 pt-6 w-44 md:w-full h-auto md:flex md:flex-row md:items-center'>
                      <div id='nav' className='mobile  md:flex md:flex-row flex flex-col justify-center bg-zinc-800 opacity-90 md:bg-transparent md:opacity-100'>
                        <Link
                        to={'/catalogo'}>
                          <button className='2xl:text-[67px] pt-4 pl-14 font-semibold'>
                            Inicio
                          </button>
                        </Link>
                        <Link
                        to={'/series'}>
                          <button className='2xl:text-[67px] pt-4 pl-14 font-semibold'>
                            Series
                          </button>
                        </Link>
                        <Link
                        to={'/movies'}>
                          <button  className='2xl:text-[67px] pt-4 pl-14  font-semibold'>
                            Peliculas
                          </button>
                        </Link>
                        <Link>
                        <button  className='2xl:text-[67px]  py-4 pl-14  font-semibold '>
                          Mi Lista
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=' hidden w-[25%]  md:block lg:block xl:block 2xl:block '>
                  
                </div>
          
          
          </div>
    </>
  )
}

export default Nav