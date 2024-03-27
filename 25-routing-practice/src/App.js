import { Routes, Route } from "react-router-dom";
import Header from "./compnents/Header";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
import StudentPage from "./pages/StudentPage";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:name" element={<StudentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
