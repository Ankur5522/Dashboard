import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainWindow from "./components/MainWindow";
import SamplePage from "./components/SamplePage";
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="appMain">
        <Sidebar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100vh"}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/my-projects" />} />
            <Route path="/my-projects" element={<MainWindow />} />
            <Route path="/sample-projects" element={<SamplePage />} />
            <Route path="/apps" element={<SamplePage />} />
            <Route path="/intro" element={<SamplePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
