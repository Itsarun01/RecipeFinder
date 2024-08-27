import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-header">
          <p className="logo">Recipe App</p>
        </div>
        <ul className="nav-list">
          <li className="nav-link">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="/recipes">
              Recipe
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
