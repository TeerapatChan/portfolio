import { Outlet, Route, Routes } from "react-router-dom";
import GetStarted from "./pages/start";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
