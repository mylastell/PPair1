import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../Pags/Home/Index'
import Erro from '../Pags/Home/Erro/Index'


export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Erro />} />
      </Routes>
    </Router>
  );
}