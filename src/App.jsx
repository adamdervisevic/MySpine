import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

import { Navbar2 } from "./components/Navbar2";
import { Header7 } from "./components/Header7";
import { Layout22 } from "./components/Layout22";
import { Gallery18 } from "./components/Gallery18";
import { Testimonial19 } from "./components/Testimonial19";
import KontaktFooter from "./components/KontaktFooter";
import VideoCarousel from "./components/VideoCarousel";

// Stranice
import FizioterapeutskiPregledPage from "./pages/FizioterapeutskiPregledPage.tsx";
import FizikalnaTerapijaPage from "./pages/FizikalnaTerapijaPage.tsx";
import DryNeedlingPage from "./pages/DryNeedlingPage.tsx";
import KineziterapijaPage from "./pages/KineziterapijaPage.tsx";
import MasazePage from "./pages/MasazePage.tsx";
import TecarTerapijaPage from "./pages/TecarTerapijaPage.tsx";
import SpinalnaDekompresijaPage from "./pages/SpinalnaDekompresijaPage.tsx";
import CenovnikPage from "./pages/CenovnikPage.tsx";

// Navbar transparent samo na / ruti
function NavbarWrapper() {
  const { pathname } = useLocation();
  const transparent = pathname === "/";
  return <Navbar2 transparent={transparent} />;
}

function Home() {
  // KORISTI KOMpresovane fajlove (sa sufiksom -720) i putanju /videos/compressed
  const myVideos = [
    { src: "/videos/compressed/video1-720.webm" },
    { src: "/videos/compressed/video2-720.webm" },
    { src: "/videos/compressed/video3-720.webm" },
    { src: "/videos/compressed/video4-720.webm" },
    { src: "/videos/compressed/video5-720.webm" },
    { src: "/videos/compressed/video6-720.webm" },
    { src: "/videos/compressed/video7-720.webm" },
    { src: "/videos/compressed/video8-720.webm" },
    { src: "/videos/compressed/video9-720.webm" },
    { src: "/videos/compressed/video10-720.webm" },
    { src: "/videos/compressed/video11-720.webm" },
    { src: "/videos/compressed/video12-720.webm" },
    { src: "/videos/compressed/video13-720.webm" },
    { src: "/videos/compressed/video14-720.webm" },
    { src: "/videos/compressed/video15-720.webm" },
    { src: "/videos/compressed/video16-720.webm" },
  ];

  return (
    <>
      <Header7 />
      <Layout22 />
      <Gallery18 />
      <VideoCarousel slides={myVideos} />
      <Testimonial19 />
      <KontaktFooter />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavbarWrapper />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Usluge */}
        <Route path="/pregled" element={<FizioterapeutskiPregledPage />} />
        <Route path="/terapija" element={<FizikalnaTerapijaPage />} />
        <Route path="/dry-needling" element={<DryNeedlingPage />} />
        <Route path="/kineziterapija" element={<KineziterapijaPage />} />
        <Route path="/masaze" element={<MasazePage />} />
        <Route path="/tecar" element={<TecarTerapijaPage />} />
        <Route path="/spinalna-dekompresija" element={<SpinalnaDekompresijaPage />} />
        {/* Redirect staze ako su ti bile stare putanje */}
        <Route path="/usluge" element={<Navigate to="/pregled" replace />} />
        <Route path="/usluge/fizioterapeutski-pregled" element={<Navigate to="/pregled" replace />} />
        <Route path="/usluge/fizikalna-terapija" element={<Navigate to="/terapija" replace />} />
        {/* Cenovnik */}
        <Route path="/cenovnik" element={<CenovnikPage />} />
      </Routes>
    </BrowserRouter>
  );
}
