import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './paginas/Home';
import SelectorPerfiles from './paginas/SelectorPerfiles';
import Catalogo from './paginas/Catalogo';
import CatalogoMovies from './paginas/CatalogoMovies';
import CatalogoSeries from './paginas/CatalogoSeries';
import Pelicula from './paginas/Pelicula';
import Serie from './paginas/Serie';
import Search from './paginas/Search/Search';

import './index.css';

function App() {

  

  return (
    <div className='bg-black  h-screen w-full'>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/selector'
          element={<SelectorPerfiles/>}
        />
        <Route
          path='/catalogo'
          element={<Catalogo/>}
        />
         <Route
          path='/movies'
          element={<CatalogoMovies/>}
        />
        <Route
          path='/series'
          element={<CatalogoSeries/>}
        />
        <Route
          path='pelicula/:id'
          element={<Pelicula/>}
        />
        <Route
          path='serie/:id'
          element={<Serie/>}
        />
         <Route
          path='busqueda'
          element={<Search/>}
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
