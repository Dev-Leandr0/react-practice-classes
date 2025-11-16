import React from 'react'
import { Link } from 'react-router'

function Card({ id, name, email, avatar }) {

  return (
    <Link to={`/detail/${id}`}>
      <div className='card'>
        <h2>Componente Card</h2>
        <img src={avatar} alt="foto perfil" />
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
      </div>
    </Link>
  );
}

export default Card