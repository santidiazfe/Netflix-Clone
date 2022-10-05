import React from "react";

const Perfil = (props) => {
  console.log(props.img)
  return(
    <div className={`${props.color} flex bg-black flex-col justify-center items-center  ml-4 mr-4 h-28 w-28  my-4 2xl:h-[200px] 2xl:w-[200px] 2xl:rounded-[3px] 2xl:`}>
      <img src={props.img} className="2xl:h-[200px] 2xl:w-[200px] h-28 w-28 rounded-md 2xl:rounded-[3px]" alt="placeholder"></img>
      <h3 className="text-white t-10 2xl:text-[30px] 2xl:mt-[10px] ">{props.nombre}</h3>
    </div>
  )

}

export default Perfil;
