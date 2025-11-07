import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about")
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleNavigate}>About</button>
    </div>


  );
}

export default Home