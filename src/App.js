import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
import Login from "./pages/loginPage"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={Login}/>
        </Routes>
      </Router>
    </div>
  );
}
