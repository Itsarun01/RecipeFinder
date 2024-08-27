import "./Home.css";
import HeroImage from "../../../assets/Hero-img.webp";
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home">
        <img className="img" src={HeroImage} />
        <div className="hero-content">
          <h1 className="hero-heading">Find Your Recipe</h1>
          <Link className="hero-btn" as={Link} to="/recipes">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};


export default Home;
