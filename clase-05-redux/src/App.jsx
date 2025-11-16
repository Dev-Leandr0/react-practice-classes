import { Route, Routes } from 'react-router';
import './App.css'
import Navbar from './components/NavBar'
import Home from './components/Home'
import Redux from './components/Redux';
import Error from './components/Error';
import Details from './components/Details';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Details />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </>
  );
}

export default App
