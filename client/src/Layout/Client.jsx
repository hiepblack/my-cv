import React, { useEffect } from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import Skills from "../components/skill/Skills";
import Services from "../components/services/Services";
import Qualification from "../components/qualification/Qualification";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import ScrollUp from "../components/scrollup/ScrollUp";
import Home from "../components/home/Home";
import Work from '../components/work/Work';

const Client = () => {
  useEffect(()=>{
    if(!localStorage.getItem("isAuth")){
      localStorage.setItem("isAuth",false);
    }
  },[])
  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  )
}

export default Client