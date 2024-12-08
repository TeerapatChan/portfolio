import { Route, Routes } from "react-router-dom";
import GetStarted from "./pages/start";
import Home from "./pages/home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
