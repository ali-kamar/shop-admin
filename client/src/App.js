import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
 return(
  <Router>
    <Navbar />
    <Home />
  </Router>

 )
}

export default App;
