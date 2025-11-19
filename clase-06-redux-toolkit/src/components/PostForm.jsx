import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router'
import { createPost } from '../redux/postSlice';
import axios from 'axios';

function PostForm() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {

    const propiedad = e.target.name;
    const valor = e.target.value;

    setInputs({
      ...inputs,
      [propiedad]: valor,
    });
  };

  const handleClick = (e) => {

    e.preventDefault();
    if (inputs) {
      const newPost = {
        title: inputs.title,
        body: inputs.body,
        userId: id,
      };
      dispatch(createPost(newPost));
      axios.post('', newPost)
        .then(() => {
          setInputs({
            title: "",
            body: "",
          })
          navigate('/posts')
        })
        .catch((err) => console.error(err));
    }

  };

  return (
    <div>
      <Link to="/Users"><button>⮌</button></Link>
      <h2>Post Form</h2>

      <form>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          value={inputs.title}
          placeholder="Titulo"
        />

        <input
          type="text"
          onChange={handleChange}
          name="body"
          value={inputs.body}
          placeholder="Mensaje"
        />
        <div>
          <button onClick={handleClick}>Crear Post</button>
        </div>
      </form>

    </div>
  )
}

export default PostForm