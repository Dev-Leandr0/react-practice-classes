import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Error from './components/Error';
import Currentpage from './components/Currentpage';
import Navbar from './components/Navbar';
import About from './components/About';
import Product from './components/Product';
import Detail from './components/Detail';
import Cursos from './components/Cursos';
import CursoFrontend from './components/CursoFrontend';
import CursoBackend from './components/CursoBackend'
import NavegarPag from './components/NavegarPag';

function App() {

  return (
    <>
      <Currentpage />
      <Navbar />
      <NavegarPag />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />

        <Route path="/cursos" element={<Cursos />}>
          <Route path="/cursos/frontend" element={<CursoFrontend />} />
          <Route path="/cursos/backend" element={< CursoBackend />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes >
    </>
  );
}

export default App
