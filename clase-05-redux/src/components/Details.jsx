import { useSelector } from 'react-redux';
import { useParams } from 'react-router'

function Details() {
  const { id } = useParams();

  const users = useSelector((state) => state.user.users);

  const user = users.find((user) => user.id === parseInt(id));

  return (
    <div className='details'>
      <img src={user.avatar} alt="foto perfil" />
      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Details