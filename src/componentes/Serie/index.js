import React from 'react';
import { Link } from 'react-router-dom'

const Serie = (props) => {
  return (
    <Link
      to={`/serie/${props.data?.id}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${props.data?.poster_path}`}
        style={{ minWidth: '240px'}}
        className="h-64 min-w-48  ml-2 rounded px-1 "
        alt="placeholder"
      />
    </Link>
  )
}

export default Serie;