import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Livecasino = React.lazy(() => import("pages/Livecasino"));
const Tournaments = React.lazy(() => import("pages/Tournaments"));
const Prematch = React.lazy(() => import("pages/Prematch"));
const Esports = React.lazy(() => import("pages/Esports"));
const Casino = React.lazy(() => import("pages/Casino"));
const Live = React.lazy(() => import("pages/Live"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/live" element={<Live />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/esports" element={<Esports />} />
          <Route path="/prematch" element={<Prematch />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/livecasino" element={<Livecasino />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
