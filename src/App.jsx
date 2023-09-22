import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
// import Team from "./components/Team/Team";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      {/* <Home /> */}
      {/* <Team /> */}
    </BrowserRouter>
  );
}

export default App;
