import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../home";
import { Truco } from "./truco";
import { Cacheta } from "./cacheta";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/truco" element={<Truco />} />
        <Route exact path="/cacheta" element={<Cacheta />} />
      </Routes>
    </BrowserRouter>
  );
};
