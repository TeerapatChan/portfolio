import { Route, Routes } from "react-router-dom";
import GetStarted from "./pages/home";
import Home from "./pages/home/components/home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
    </Routes>
  );
}
