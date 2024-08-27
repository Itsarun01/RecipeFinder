import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-section">
          <h1 className="logo">Recipe App</h1>
        </div>
        <ul className="nav-list">
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
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
