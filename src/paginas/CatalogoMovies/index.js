import React, { useEffect, useState } from 'react';
import ListadoPeliculas from '../../componentes/ListadoPeliculas';
import Nav from '../../componentes/Nav';
import MobileNav from '../../componentes/MobileNav';

const CatalogoMovies = () => {
  const [populares, setPopulares] = useState([]);
  const [rankeadas, setRankeadas] = useState([]);
  const [estrenos, setEstrenos] = useState([]);
  const [cartelera, setCartelera] = useState([]);

  useEffect(() => {
    getPopulares();
    getRankeadas();
    getEstrenos();
    getCartelera(); 
  }, [])



  const getPopulares = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=35ae0ab849a7893db02cf33f003e017f')
      .then(response => response.json())
      .then((peliculas) => {
        setPopulares(peliculas.results)
      })
      .catch(() => {

      })
  }

  const getRankeadas = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=35ae0ab849a7893db02cf33f003e017f')
      .then(response => response.json())
      .then((peliculas) => {
        setRankeadas(peliculas.results)
      })
      .catch(() => {
        
      })
  }

  const getEstrenos = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=35ae0ab849a7893db02cf33f003e017f')
    .then(response => response.json())  
    .then((peliculas) => {
        setEstrenos(peliculas.results)
      })
      .catch(() => {
        
      })
  }

  const getCartelera = () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=35ae0ab849a7893db02cf33f003e017f')
      .then(response => response.json())
      .then((peliculas) => {
        setCartelera(peliculas.results);
      })
      .catch(() => {
        
      })
  }

  
  return (
    <div className=' bg-gradient-to-r from-zinc-800 to-black h-auto flex flex-col'>

      <div 
        className="bg-cover sm:bg-center w-full h-[600px] opacity-95 lg:bg-top  2xl:h-[2800px]"
        style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${populares[1]?.backdrop_path}")`}}
        >
          
          <Nav />
         
      </div>
      <div className='flex text-4xl justify-evenly items-center text-white h-auto mt-2 w-full 2xl:text-[57px] '>

        <button className='flex flex-col px-2 2xl:text-[57px]'>
          <i className="fa-solid fa-plus"></i>
          <h3 className='text-sm 2xl:text-[57px]'>My List</h3>
        </button>
        <button className='mb-5 flex bg-white w-[100px] h-[50px] rounded-md 2xl:w-[407px] 2xl:h-[207px] 2xl:radius-[50px]' >
          <i className="fa-solid pl-2 mt-2 text-black fa-play  2xl:w-[107px] 2xl:h-[67px]"></i>
          <h3 className='text-black font-semibold mt-1 ml-1 text-[25px] 2xl:text-[57px]'>Play</h3>
        </button>
        <button className='flex flex-col  px-2 2xl:w-[107px] 2xl:h-[107px]'>
          <i className="fa-solid fa-circle-info 2xl:w-[107px] 2xl:h-[107px]"></i>
          <h3 className='text-sm ml-1 2xl:text-[107px]'>Info</h3>
        </button>
        
        
      </div>
        

      <ListadoPeliculas
        nombre='Populares'
        peliculas={populares}
      />


      <ListadoPeliculas
        nombre='Mejor Rankeadas'
        peliculas={rankeadas}
      />
     
      <ListadoPeliculas
          nombre='En cartelera'
          peliculas={cartelera}
        />

      <div className='mb-14'>
        <ListadoPeliculas
        nombre='Próximos estrenos'
        peliculas={estrenos}
        />
      </div>
        <MobileNav/>
      
    </div>
  )
}

export default CatalogoMovies;