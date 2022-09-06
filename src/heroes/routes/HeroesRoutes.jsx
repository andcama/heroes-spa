import { NavBar } from "../../UI";
import { MarvelPage } from "../pages/MarvelPage";
import { DCPage } from "../pages/DCPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";
export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />

        </Routes>
      </div>
    </>
  );
};
