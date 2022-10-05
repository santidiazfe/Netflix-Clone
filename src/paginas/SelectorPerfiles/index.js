import React, { useEffect, useState } from 'react';
import ListadoPerfiles from '../../componentes/ListadoPerfiles';

const SelectorPerfiles = () => {

  const [perfiles, setPerfiles] = useState([]);
  
  useEffect(()=> {
    const perfilesUsuario = [
      
      { nombre: 'Emenalo', img: 'https://i.im.ge/2022/09/23/10bOnx.Capture.png'},
      { nombre: 'Onyeka',  img: 'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'},
      { nombre: 'Thelma',  img: 'https://pbs.twimg.com/media/DmBraqkXcAA1Yco.jpg'},
      { nombre: 'Kids',  img: 'https://i.im.ge/2022/09/23/10YGdf.netflix-kids-1.jpg'},
      
    ];
    setPerfiles(perfilesUsuario);
  }, []);

  return (
    <>
      <div className='flex flex-col justify-center items-center 2xl:text-[75px]'>
        <img className=' h-[100px] w-[200px] mb-32 mt-12  lg:w-[400px] lg:mb-4 lg:h-[200px] lg:mt-4 2xl:h-[250px] 2xl:w-[450px] ' 
        src="https://socialgeek.co/wp-content/uploads/2017/06/Netflix-Logo-Print_CMYK.jpg" alt="" />
        <ListadoPerfiles
          perfiles={perfiles}
          
        />
      </div>
    </>
  )
}

export default SelectorPerfiles;
