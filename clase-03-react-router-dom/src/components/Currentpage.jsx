import { useLocation } from 'react-router';

function Currentpage() {

  const { pathname } = useLocation();

  return (
    <div>
      <span>Usted se encuentra en: </span>
      <span className='active'>
        {pathname}
      </span>
    </div>
  )
}

export default Currentpage;