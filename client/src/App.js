import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import NavbarComp from "./components/navbar";
import ContactMe from "./pages/contactMe";
import About from "./pages/about";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Projects from "./pages/projects";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/contactMe" element={<ContactMe />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
