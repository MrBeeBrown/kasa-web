import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Location from "./Location";
import About from "./About";
import Error from "./Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='location/:id' element={<Location />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;