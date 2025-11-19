import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/users">
        <button>Users</button>
      </Link>

      <Link to="/posts">
        <button>Posts</button>
      </Link>
    </div>
  )
}

export default Home