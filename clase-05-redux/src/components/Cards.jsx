import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

function Cards() {

  const users = useSelector((state) => state.user.users);
  return (
    <div className='cards'>
      <h2>Componente Cards</h2>
      {users.map((user) => (
        <Card
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}

export default Cards