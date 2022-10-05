import React, { useEffect, useState } from 'react';
import ListadoPeliculas from '../../componentes/ListadoPeliculas';
import ListadoSeries from '../../componentes/ListadoSeries';
import Nav from '../../componentes/Nav';
import MobileNav from '../../componentes/MobileNav';
const Catalogo = () => {
  const [populares, setPopulares] = useState([]);
  const [seriesPop, setSeriesPop] = useState([]);
  const [seriesTop, setSeriesTop] = useState([]);
  const [seriesEstrenos, setSeriesEstrenos] = useState([]);
  const [rankeadas, setRankeadas] = useState([]);
  const [estrenos, setEstrenos] = useState([]);
  const [cartelera, setCartelera] = useState([]);
 

  useEffect(() => {
    getPopulares();
    getRankeadas();
    getEstrenos();
    getCartelera();
    getSeriesPop();
    getSeriesTop();
    getSeriesEstrenos(); 
  }, [])

  

  const getSeriesPop = () => {
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=35ae0ab849a7893db02cf33f003e017f')
      .then(response => response.json())
      .then((series) => {
        setSeriesPop(series.results)
      })
      .catch(() => {

      })
  }

  const getSeriesTop = () => {
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=35ae0ab849a7893db02cf33f003e017f')
      .then(response => response.json())
      .then((series) => {
        setSeriesTop(series.results)
      })
      .catch(() => {

      })
  }

  const getSeriesEstrenos = () => {
    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=35ae0ab849a7893db02cf33f003e017f')
      .then(response => response.json())
      .then((series) => {
        setSeriesEstrenos(series.results)
      })
      .catch(() => {

      })
  }


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
        className="bg-cover sm:bg-center w-full h-[600px] opacity-95 lg:bg-top  2xl:h-[1000px] bg-[url('https://i.im.ge/2022/09/22/1hPnj1.bg-gradient-thor.png')]"
        >
          
          <Nav />
         
      </div>
      <div className='flex text-4xl justify-evenly items-center text-white h-auto mt-2 w-full 2xl:px-44 '>

        <button className='flex flex-col px-2 2xl:text-[28px] 2xl:flex-col  2xl:w-[53px] 2xl:h-[53px] 2xl:items-center'>
          <i className="fa-solid fa-plus 2xl:w-[53px] 2xl:h-[53px] 2xl:justify-center 2xl:flex "></i>
          <h3 className='text-sm 2xl:w-[93px] 2xl:text-2xl'>My List</h3>
        </button>
        <button className='mb-5 flex bg-white w-[100px] h-[50px] rounded-md 2xl:w-[125px] 2xl:h-[70px] 2xl:radius-[15px] 2xl:items-center 2xl:justify-center 2xl:mb-0 2xl:mt-0 ' >
          <i className="fa-solid pl-2 mt-2 text-black fa-play  2xl:w-[50px] 2xl:h-[17px] 2xl:mb-9 2xl:mt-5  "></i>
          <h3 className='text-black font-semibold mt-1 ml-1 text-[25px] 2xl:text-[28px] 2xl:mb-1'>Play</h3>
        </button>
        <button className='flex flex-col  px-2 2xl:w-[53px] 2xl:h-[53px] 2xl:text-[28px]'>
          <i className="fa-solid fa-circle-info 2xl:w-[53px] 2xl:h-[53px]"></i>
          <h3 className='text-sm ml-1 2xl:text-[28px]'>Info</h3>
        </button>
        
        
      </div>
        

      <ListadoPeliculas
        nombre='Populares'
        peliculas={populares}
      />

      <ListadoSeries
        nombre='Las Ultimas Novedades'
        series={seriesEstrenos}
        /> 

      <ListadoPeliculas
        nombre='Mejor Rankeadas'
        peliculas={rankeadas}
      />
     
      <ListadoPeliculas
          nombre='En cartelera'
          peliculas={cartelera}
        />

      <ListadoSeries
        nombre='Series Mejor Rankeadas'
        series={seriesTop}
        /> 
      
      <ListadoPeliculas
        nombre='Próximos estrenos'
        peliculas={estrenos}
      />
      

      <div className='mb-14'>
        <ListadoSeries
        nombre='Series Populares'
        series={seriesPop}
        /> 
      </div>
        <MobileNav/>
      
    </div>
  )
}

export default Catalogo;
