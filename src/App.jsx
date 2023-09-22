import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Paint from "./components/paint/Paint";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/paint" element={<Paint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
