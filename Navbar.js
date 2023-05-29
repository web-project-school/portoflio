import NavItem from "./components/NavItem";
const Navbar = (props) => {
  return (
    // <>
    //   <li>
    //     <Link to="/">home</Link>
    //   </li>
    //   <li>
    //     <Link to="/app">app</Link>
    //   </li>
    // </>
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <span>
            <a className="navbar-brand">Ali Bin Salman</a>
          </span>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
            <ul className="flex">
              <NavItem name="Home" link="/" />
              <NavItem name="About" link="/about" />
              <NavItem name="Projects" link="/projects" />
              <NavItem name="ActionSteps" link="/actions" />
              <NavItem name="Host plans" link="/plan" />
              <NavItem name="Contact Me" link="/contact" />
            </ul>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
