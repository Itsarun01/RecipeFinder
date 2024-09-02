import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo-section">
          <h1 className="logo">Recipe App</h1>
        </Link>
        {/* <ul className="nav-list">
          <li className="nav-link">
            <Link Link to="/">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link Link to="/recipes">
              Recips
            </Link>
          </li>
        </ul> */}
      </nav>
    </>
  );
};

export default Navbar;
