import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Houses from "./components/Houses";
import User from "./components/User";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetail from "./components/UserDetail";
import { CartProvider } from "./components/userContext"; 
import Cart from "./components/userContext"; 

function App() {
  return (
    <CartProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/user" element={<User  />} /> 
          <Route path="/houses/:id" element={<User Detail />} /> 
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;