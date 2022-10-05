import React, { useEffect, useState } from 'react';
import ListadoPeliculas from '../../componentes/ListadoPeliculas';
import ListadoSeries from '../../componentes/ListadoSeries';
import Nav from '../../componentes/Nav';
import MobileNav from '../../componentes/MobileNav';

const CatalogoSeries = () => {
  const [seriesPop, setSeriesPop] = useState([]);
  const [seriesTop, setSeriesTop] = useState([]);
  const [seriesEstrenos, setSeriesEstrenos] = useState([]);

  useEffect(() => {
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



  
  return (
    <div className=' bg-gradient-to-r from-zinc-800 to-black h-auto flex flex-col'>

      <div 
        className="bg-cover  sm:bg-center w-full h-[600px] opacity-95 lg:bg-center  2xl:h-[1000px]"
        style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${seriesEstrenos[1]?.backdrop_path}")`}}
        >
        
          
          <Nav />
         
      </div>
      <div className='flex text-4xl justify-evenly items-center text-white h-auto mt-2 w-full 2xl:text-[57px] '>

        <button className='flex flex-col px-2 2xl:text-[57px]'>
          <i className="fa-solid fa-plus"></i>
          <h3 className='text-sm 2xl:text-[57px]'>My List</h3>
        </button>
        <button className='mb-5 flex bg-white w-[100px] h-[50px] rounded-md 2xl:w-[203px] 2xl:h-[103px] 2xl:radius-[25px]' >
          <i className="fa-solid pl-2 mt-2 text-black fa-play  2xl:w-[53px] 2xl:h-[33px]"></i>
          <h3 className='text-black font-semibold mt-1 ml-1 text-[25px] 2xl:text-[28px]'>Play</h3>
        </button>
        <button className='flex flex-col  px-2 2xl:w-[53px] 2xl:h-[53px]'>
          <i className="fa-solid fa-circle-info 2xl:w-[107px] 2xl:h-[107px]"></i>
          <h3 className='text-sm ml-1 2xl:text-[107px]'>Info</h3>
        </button>
        
        
      </div>
        


      <ListadoSeries
        nombre='Las Ultimas Novedades'
        series={seriesEstrenos}
        /> 


      <ListadoSeries
        nombre='Series Mejor Rankeadas'
        series={seriesTop}
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

export default CatalogoSeries;