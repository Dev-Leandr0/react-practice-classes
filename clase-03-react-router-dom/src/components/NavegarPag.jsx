import { useNavigate } from "react-router-dom"

function NavegarPag() {

  const navigate = useNavigate();

  return (

    <div>
      <button onClick={() => navigate(-1)}>Preview</button>
      <button onClick={() => navigate(1)}>Next</button>
    </div>
  )
}

export default NavegarPag