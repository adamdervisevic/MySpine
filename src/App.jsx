import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar2 } from "./components/Navbar2";
import { Header7 } from "./components/Header7";
import { Layout22 } from "./components/Layout22";
import { Gallery18 } from "./components/Gallery18";
import { Testimonial19 } from "./components/Testimonial19";
import KontaktFooter from "./components/KontaktFooter";
import VideoCarousel from "./components/VideoCarousel";

import FizioterapeutskiPregledPage from "./pages/FizioterapeutskiPregledPage.tsx";
import FizikalnaTerapijaPage from "./pages/FizikalnaTerapijaPage.tsx";
import DryNeedlingPage from "./pages/DryNeedlingPage.tsx";
import KineziterapijaPage from "./pages/KineziterapijaPage.tsx";
import MasazePage from "./pages/MasazePage.tsx";
import TecarTerapijaPage from "./pages/TecarTerapijaPage.tsx";
import SpinalnaDekompresijaPage from "./pages/SpinalnaDekompresijaPage.tsx";
import CenovnikPage from "./pages/CenovnikPage.tsx";


function Home() {
  const myVideos = [
    { src: "/videos/video1.webm" }, { src: "/videos/video2.webm" }, { src: "/videos/video3.webm" },
    { src: "/videos/video4.webm" }, { src: "/videos/video5.webm" }, { src: "/videos/video6.webm" },
    { src: "/videos/video7.webm" }, { src: "/videos/video8.webm" }, { src: "/videos/video9.webm" },
    { src: "/videos/video10.webm" }, { src: "/videos/video11.webm" }, { src: "/videos/video12.webm" },
    { src: "/videos/video13.webm" }, { src: "/videos/video14.webm" }, { src: "/videos/video15.webm" },
    { src: "/videos/video16.webm" },
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
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Usluge / stranice */}
        <Route path="/pregled" element={<FizioterapeutskiPregledPage />} />
        <Route path="/terapija" element={<FizikalnaTerapijaPage />} />
        <Route path="/dry-needling" element={<DryNeedlingPage />} />
        <Route path="/kineziterapija" element={<KineziterapijaPage />} />
        <Route path="/masaze" element={<MasazePage />} />
        <Route path="/tecar" element={<TecarTerapijaPage />} />
        <Route path="/spinalna-dekompresija" element={<SpinalnaDekompresijaPage />} />
        <Route path="/usluge" element={<Navigate to="/pregled" replace />} />
        <Route path="/usluge/fizioterapeutski-pregled" element={<Navigate to="/pregled" replace />} />
        <Route path="/usluge/fizikalna-terapija" element={<Navigate to="/terapija" replace />} />
        <Route path="/cenovnik" element={<CenovnikPage to="/cenovnik" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
