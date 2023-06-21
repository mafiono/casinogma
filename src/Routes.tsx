import React from "react";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Livecasino = React.lazy(() => import("pages/Livecasino"));
const Tournaments = React.lazy(() => import("pages/Tournaments"));
const Prematch = React.lazy(() => import("pages/Prematch"));
const Esports = React.lazy(() => import("pages/Esports"));
const TermsAndConditions = React.lazy(() => import("pages/TermsAndConditions"));
const Casino = React.lazy(() => import("pages/Casino"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Live = React.lazy(() => import("pages/Live"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="/live" element={<Live />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/esports" element={<Esports />} />
          <Route path="/prematch" element={<Prematch />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/livecasino" element={<Livecasino />} />
          <Route path="/virtualsports" element={<VirtualSports />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Redirect to="/" />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
