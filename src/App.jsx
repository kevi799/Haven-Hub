import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Houses from "./components/Houses";
import User from "./components/User"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="User" element={<User/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
