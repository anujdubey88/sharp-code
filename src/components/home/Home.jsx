import React from "react"
import Hero from "./hero/Hero"
import Slider2 from "./slieder/Slider2"
import AboutCard from "../about/AboutCard"
// import MVP from "../../testimonials/mvp"

const Home = () => {
  return (
    <>
      <Hero />
      {/* <MVP/> */}
      <AboutCard />
      <Slider2/>
    </>
  )
}

export default Home
