import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Recipes from "./Components/Pages/Recipes/Recipes";
import Navbar from "./Components/Common/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RecipesDetails from "./Components/Pages/Recipes/RecipesDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<RecipesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
