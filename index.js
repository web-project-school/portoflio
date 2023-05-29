import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/ContactMe";
import Actions from "./pages/ActionSteps";
import Plan from "./pages/Plan";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Router>
      <Navbar active="home" />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home name="Ali Salman" title="Home Page | Portoflio" />}
          />
          <Route
            path="/about"
            element={<About title="About Page | Portoflio" />}
          />
          <Route
            path="/projects"
            element={<Projects title="Projects Page | Portoflio" />}
          />
          <Route
            path="/actions"
            element={<Actions title="Actions Steps Page | Portoflio" />}
          />
          <Route
            path="/contact"
            element={<Contact title="Contact Page | Portoflio" />}
          />
          <Route
            path="/plan"
            element={<Plan title="Host plans Page | Portoflio" />}
          />
        </Routes>
      </div>
    </Router>
  </>
);
