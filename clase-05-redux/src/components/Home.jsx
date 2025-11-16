import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions';
import Cards from './Cards';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getUsers());

  }, [dispatch]);

  return (
    <div className='home'>
      <h2>Este es el Home</h2>
      <Cards />
    </div>
  );
}

export default Home