import {useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MobileNav from '../../componentes/MobileNav';
import ListadoPeliculas from '../../componentes/ListadoPeliculas';


const Pelicula = () => {
  const [pelicula, setPelicula] = useState({});
  const [trailer, setTrailer] = useState({});
  const [generos, setGeneros] = useState([]);
  const [similar, setSimilar] = useState([]);

  

  const {id} = useParams(); 

  const getSimilar = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=35ae0ab849a7893db02cf33f003e017f`)
    .then(response => response.json())  
    .then((similar) => {
        setSimilar(similar.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getTrailer = async () => {
    
    await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=35ae0ab849a7893db02cf33f003e017f`)
    .then(response => response.json())  
    .then((trailer) => {
        setTrailer(trailer)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getPelicula = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=35ae0ab849a7893db02cf33f003e017f`)
    .then(response => response.json())  
    .then((movie) => {
        setPelicula(movie)
        setGeneros(movie.genres)
        
      })
      .catch((error) => {
        console.log(error)
      })
      
  }
  useEffect(() => {
    getPelicula()
    getTrailer()
    getSimilar()
  } , [id]);




  return (
    <div className='bg-black text-white md:px-20 md:pt-2 w-full '>
        
      <div
        className={`h-[550px] w-full bg-center bg-cover`}
        style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${pelicula.backdrop_path}")`}}
        >
          <Link
          to='/catalogo'>
          <i className="fa-solid ml-4 mt-4 text-zinc-400  text-3xl md:text-4xl hover:text-red-700 fa-circle-arrow-left"></i>
        </Link>
        
        </div>
       

        <div className='flex justify-between items-center  text-white text-2xl mt-6 px-8'>
          <div>
            <button className='flex-col md:ml-6'>
            <i className="fa-solid text-5xl fa-circle-play hover:text-red-700"></i>
            </button>
          </div>
          
       
          <div className='md:mr-10 flex items-center'>
            <button className='flex flex-col pr-8' >
              <i className="fa-solid fa-plus text-3xl"></i>
              <h3 className='text-sm font-semibold '>My List</h3>
            </button>  
          <button className='flex-col pr-8'>
            <i className="fa-solid fa-bell "></i>
            <p className='text-sm font-semibold'>Remind me</p>
          </button> 
          <button>
            <i className="fa-solid fa-share-nodes"></i>
            <p className='text-sm font-semibold '>Share</p>
          </button>
        </div> 
      </div>
        
      <div className=' ml-4 text-white mt-6'>
        <div className='flex justify-between items-center'>
          <p className='text-sm font-semibold text-zinc-300 '>{pelicula.release_date}</p>
           
        </div>  
        <div className='md:flex'>
          <div className='md:w-1/2 flex flex-col md:mt-10 '>     
            <h3 className='text-2xl font-bold mb-2 ' >{pelicula.title}</h3>
            <p className='mt-4 w-[80%]'>{pelicula.overview}</p>
            <ul className='flex list-disc '>
            {generos.map((genero) =>(
              <li className='text-sm md:mr-16 ml-4 mt-4 font-bold text-white '>{genero.name}</li>
            ))}
            </ul>
          </div>
          <div className='md:w-1/2 '> 
            <h4 className='text-white text-xl pt-10 pb-2 font-bold'>Ver Trailer</h4>
            <iframe className='pb-20 h-[280px] w-[95%] md:w-full md:h-[330px]' src={`https://www.youtube.com/embed/${trailer.results&&trailer?.results[0]?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className='pb-20 bg-black'>
          <ListadoPeliculas
          peliculas={similar}
          nombre='Contenido Relacionado'
          />
        </div>
          
      </div>
      <MobileNav/>  
    </div>
  )
}

export default Pelicula;