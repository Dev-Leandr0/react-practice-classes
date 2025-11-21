import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import FormBasico from "./components/FormBasico";
import FormHook from "./components/FormHook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-basico" element={<FormBasico />} />
        <Route path="/form-hook" element={<FormHook />} />
      </Routes>
    </>
  );
}

export default App;
