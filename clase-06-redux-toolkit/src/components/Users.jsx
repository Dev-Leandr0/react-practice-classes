import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router'
import { getUsers } from '../redux/usersSlice';
import axios from 'axios';
import User from './User'

function Users() {

  const url = 'https://jsonplaceholder.typicode.com/users'
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(url)
      .then((res) => dispatch(getUsers(res.data)))
      .catch((err) => console.error(err))
  }, [dispatch])


  return (
    <div>
      <Link to="/"><button>⮌</button></Link>
      <h2>Users</h2>

      <div className='cards-container'>
        {
          users.map((user =>
            <div className='card' key={user.id} >
              <User
                id={user.id}
                name={user.name}
                email={user.email}
                role={user.role}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Users