import React from 'react'

// eslint-disable-next-line no-unused-vars
function Post({ id, userId, title, body }) {
  return (
    <div>
      <p>User id: {userId}</p>
      <p><b>Titulo:{title}</b></p>
      <p>{body}</p>
    </div>
  )
}

export default Post