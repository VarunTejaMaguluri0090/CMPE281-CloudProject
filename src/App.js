import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/sideBar/SideBar";
import Home from "./pages/home/Home"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MaintainancePage from "./pages/maintainancePage/MaintainancePage";
import MaintainanceUpdate from "./pages/maintainanceUpdate/MaintainanceUpdate";

function App() {
  return (
    <Router>
       <TopBar />
     
        <div className = "container">     
          <SideBar />
          
          <Routes>
           <Route exact path="/home" element={<Home/>} />
          </Routes>
          
          <Routes>
           <Route path="/maintain" element={<MaintainancePage/>} />
          </Routes>

          <Routes>
           <Route path="/maintain/:requestId" element={<MaintainanceUpdate/>} />
          </Routes>

        </div>  
    </Router>
     
  );
}

export default App;
