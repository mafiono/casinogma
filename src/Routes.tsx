import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import VirtualSports from "pages/VirtualSports";
import Basketball from "pages/Live/Match/Basketball";
import Baseball from "pages/Live/Match/Baseball";
import IceHockey from "pages/Live/Match/IceHockey";
import Jackpot5000000 from "pages/Articles/Jackpot5000000";
import BonusWheel1000000 from "pages/Articles/BonusWheel1000000";
import WelcomeBonusUpTo300 from "pages/Articles/WelcomeBonusUpTo300";
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
          <Route path="/icehockey" element={<IceHockey />} />
          <Route path="/baseball" element={<Baseball />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/livecasino" element={<Livecasino />} />
          <Route path="/jackpot5000000" element={<Jackpot5000000 />} />
          <Route path="/bonuswheel1000000" element={<BonusWheel1000000 />} />
          <Route path="/welcomebonusupto300" element={<WelcomeBonusUpTo300 />} />
          <Route path="/virtualsports" element={<VirtualSports />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
