// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

import { Navbar2 } from "./components/Navbar2";
import { Header7 } from "./components/Header7";
import { Layout22 } from "./components/Layout22";
import Services from "./components/Services";
import { Gallery18 } from "./components/Gallery18";
import { Testimonial19 } from "./components/Testimonial19";
import KontaktFooter from "./components/KontaktFooter";
import VideoCarousel from "./components/VideoCarousel";
import WhatsAppButton from "./components/WhatsAppButton";

// Stranice
import FizioterapeutskiPregledPage from "./pages/FizioterapeutskiPregledPage.tsx";
import FizikalnaTerapijaPage from "./pages/FizikalnaTerapijaPage.tsx";
import DryNeedlingPage from "./pages/DryNeedlingPage.tsx";
import KineziterapijaPage from "./pages/KineziterapijaPage.tsx";
import MasazePage from "./pages/MasazePage.tsx";
import TecarTerapijaPage from "./pages/TecarTerapijaPage.tsx";
import SpinalnaDekompresijaPage from "./pages/SpinalnaDekompresijaPage.tsx";
import CenovnikPage from "./pages/CenovnikPage.tsx";

// Navbar transparent samo na /
function NavbarWrapper() {
  const { pathname } = useLocation();
  const transparent = pathname === "/";
  return <Navbar2 transparent={transparent} />;
}

function Home() {
  const myVideos = [
    // YouTube Shorts videi sa tvojeg kanala
    { type: 'youtube', src: 'rSSHdaNW4z8', title: 'Fizioterapeutska vežba 1' },
    { type: 'youtube', src: 'VAnH0tmqGE0', title: 'Fizioterapeutska vežba 2' },
    { type: 'youtube', src: 'NPCJdSezn2s', title: 'Fizioterapeutska vežba 3' },
    { type: 'youtube', src: 'nt3ILsjtR0k', title: 'Fizioterapeutska vežba 4' },
    { type: 'youtube', src: 'aR6bRZsRo80', title: 'Fizioterapeutska vežba 5' },
    { type: 'youtube', src: 'HK-mbgil1fs', title: 'Fizioterapeutska vežba 6' },
    
    // Dodaj još videa ako imaš:
    // { type: 'youtube', src: 'VIDEO_ID', title: 'Naziv vežbe' },
  ];

  return (
    <>
      <Header7 />
      <Layout22 />
      <Services />
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

        {/* Redirect stare putanje (ako postoje) */}
        <Route path="/usluge" element={<Navigate to="/pregled" replace />} />
        <Route path="/usluge/fizioterapeutski-pregled" element={<Navigate to="/pregled" replace />} />
        <Route path="/usluge/fizikalna-terapija" element={<Navigate to="/terapija" replace />} />

        {/* Cenovnik */}
        <Route path="/cenovnik" element={<CenovnikPage />} />
      </Routes>

      <WhatsAppButton />
    </BrowserRouter>
  );
}