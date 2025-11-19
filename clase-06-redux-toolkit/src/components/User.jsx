import React from 'react'
import { Link } from "react-router";


function User({ id, name, email, role }) {
  return (

    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{role}</p>
      <Link to={`/post-form/${id}`}>
        <button >Crear Post</button>
      </Link>
    </div>
  )
}

export default User