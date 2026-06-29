import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FeaturesGames from "../components/FeaturesGames";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/features-games" element={<FeaturesGames />} />
    </Routes>
  );
};

export default Router;