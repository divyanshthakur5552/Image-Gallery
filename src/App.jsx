import About from "./Components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/favorites" element={<Favorites />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
