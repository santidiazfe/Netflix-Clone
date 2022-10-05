import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Searchbar from '../../componentes/Searchbar/Searchbar';
import PeliculaBusqueda from '../../componentes/PeliculaBusqueda';
import MobileNav from '../../componentes/MobileNav';

const Search = () => {
    const [populares, setPopulares] = useState([]);
    const [valor, setValor] = useState('')

    useEffect(() => {
        getPopulares();
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
      
  return (

  <div className='h-auto bg-black'> 
    
    <Searchbar
    setValor={setValor}
    />
      <div className=''>
        <h1 className='font-bold ml-5 pb-2 text-xl md:text-2xl capitalize text-white'>Más Buscadas</h1>
        <div className="flex flex-col overflow-y-auto ">
        {populares?.filter((pelicula) => pelicula.title.toLowerCase().match(valor.toLowerCase())).map((pelicula) => (
        <div className='bg-zinc-700 flex items-center h-20 hover:drop-shadow-2xl w-full my-[2px] md:h-44 '>
          <PeliculaBusqueda
          title={pelicula.title}
          data={pelicula}   
          />
          <h3 className='text-white flex justify-self-center font-semibold px-4 text-md max-w-[40%] md:text-2xl md:ml-12'>{pelicula.title}</h3>
          <button className='absolute right-7'>
            <Link
            to={`/pelicula/${pelicula.id}`}
            >
            <i className="fa-solid text-xl md:text-4xl md:mr-10 fa-circle-play text-white"></i>
            </Link>
          </button>
        </div>
        ))}
        </div>
        </div>
        <MobileNav/>
  </div>
  )
}

export default Search