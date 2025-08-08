// App.jsx
import React from "react"
import { Navbar2 } from "./components/Navbar2"
import { Header7 } from "./components/Header7"
import { Layout22 } from "./components/Layout22"
import { Gallery18 } from "./components/Gallery18"
import { Testimonial19 } from "./components/Testimonial19"
import { Footer4 } from "./components/Footer4"
import VideoCarousel from "./components/VideoCarousel"

export default function App() {
  const myVideos = [
    { src: "/videos/video1.mp4"},
    { src: "/videos/video2.mp4"},
    { src: "/videos/video3.mp4"},
    { src: "/videos/video4.mp4"},
    { src: "/videos/video5.mp4"},
    { src: "/videos/video6.mp4"},
    { src: "/videos/video7.mp4"},
    { src: "/videos/video8.mp4"},
    { src: "/videos/video9.mp4",},
    { src: "/videos/video10.mp4",},
    { src: "/videos/video11.mp4"},
    { src: "/videos/video12.mp4"},
    { src: "/videos/video13.mp4"},
    { src: "/videos/video14.mp4"},
    { src: "/videos/video15.mp4"},
    { src: "/videos/video16.mp4"},
  ]

  return (
    <>
      <Navbar2/>
      <Header7/>
      <Layout22/>
      <Gallery18/>
      <VideoCarousel slides={myVideos}/>
      <Testimonial19/>
      <Footer4/>
    </>
  )
}
