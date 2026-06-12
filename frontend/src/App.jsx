import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMedicine from "./pages/AddMedicine";
import TodaysPlan from "./pages/TodaysPlan";
import HelpfulQuestions from "./pages/HelpfulQuestions";
import PlanReady from "./pages/PlanReady";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-bg">
        <div className="phone-card">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-medicine" element={<AddMedicine />} />
            <Route path="/todays-plan" element={<TodaysPlan />} />
            <Route path="/helpful-questions" element={<HelpfulQuestions />} />
            <Route path="/plan-ready" element={<PlanReady />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
