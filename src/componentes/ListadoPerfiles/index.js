import React from "react";
import { Link } from "react-router-dom";

import Perfil from "../Perfil";

const ListadoPerfiles = (props) => {
  return (
    <div className="flex flex-wrap lg:flex-row  justify-center items-center 2xl:flex-wrap lg:ml-28">
      { props.perfiles?.map((perfil) => (
        <Link
          to='/catalogo'
        >
          <Perfil
            nombre={perfil.nombre}
            color={perfil.color}
            img={perfil.img}
          />
        </Link>
        
      ))}
      <button className="h-20 w-20 mr-36 mt-6 lg:mb-10 lg:ml-4  2xl:w-[320px] 2xl:flex 2xl:flex-col 2xl:self-start 2xl:mt-[100px]">
        <img alt="placeholder" className="h-26 w-26  2xl:w-[110px] " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWzrlZI03mmNswztivBJ37j8O52Bzl_Fks8czESsjqje2taRLPiz7EIyuWJvcfuc2S0Q&usqp=CAU"></img>
        <h3 className="text-white mt-1 lg:mt-3 2xl:mt-[15px] 2xl:text-[30px]">Add Profile</h3>
      </button>
    </div>
  )
}

export default ListadoPerfiles;
