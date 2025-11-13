
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/View/NavBar';
import ViewUseSate from './components/View/ViewUseSate'
import ViewUseEffect from './components/View/ViewUseEffect'
import ViewUseContext from './components/View/ViewUseContext';
import UseContextExample from './hooks/UseContextExample';
import Home from './components/View/Home';
import ViewUseRef from './components/View/ViewUseRef';
import ViewUseCustom from './components/View/ViewUseCustom';

function App() {


  return (
    <>

      <Navbar />
      <UseContextExample>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<ViewUseSate />} />
          <Route path="/useEffect" element={<ViewUseEffect />} />

          <Route path="/useContext" element={<ViewUseContext />} />
          {/*           <Route
            path="/useContext"
            element={
              <UseContextExample>
                <ViewUseContext />
              </UseContextExample>
            }
          /> */}
          <Route path="/useRef" element={<ViewUseRef />} />
          <Route path="/useCustom" element={<ViewUseCustom />} />
        </Routes>
      </UseContextExample>
    </>
  );
}

export default App
