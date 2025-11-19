import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router'
import { getPosts } from '../redux/postSlice';
import axios from 'axios';
import Post from './Post';


function Posts() {

  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=25';
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url)
      .then((res) => dispatch(getPosts(res.data)))
      .catch((err) => console.error(err))
    /*     return () => {
          dispatch(getPosts([]));
        }; */
  }, [dispatch]);

  return (
    <div>
      <Link to="/"><button>⮌</button></Link>
      <h2>Posts</h2>

      <div className='cards-container'>
        {
          posts.map((post =>
            <div className='card' key={post.id}>
              <Post
                title={post.title}
                body={post.body}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Posts