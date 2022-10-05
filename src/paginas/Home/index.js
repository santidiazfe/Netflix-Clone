import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex items-center justify-center'>
      <Link className='w-full h-[100vh]  flex justify-center items-center  '
        to="/selector"
      >
        <img alt="Logo Netflix" className='W-full h-full' src="https://c.tenor.com/QJNoPeq9WmUAAAAC/netflix-intro-netflix.gif"/>
      </Link>
    </div>
  )
}

export default Home;
