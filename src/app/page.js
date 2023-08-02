'use client'
import { styled } from "styled-components"
import Image from "next/image"

import Header from "@/_component/_header/Header"
import Hero from "@/_component/_intro/Hero"
import About from "@/_component/_intro/About"
import PortfolioSection from "@/_component/_portfolio/PortfolioSection"
import TestimonialSection from "@/_component/TestimonialSection"
import ContactSection from "@/_component/ContactSection"
import Footer from "@/_component/Footer"


const MainStyle = styled.main`
  .home__section, .contrast-bg {
    background-color: var(--mn-bg-color);
    padding-top: 120px;
    padding-bottom: 136px;

    h2 {
      color: var(--dark-bg-h2);
      font-family: var(--sec-font);
      margin-bottom: 54px;
    }

    h3 {
      font-family: var(--sec-font);
    }
  }

  .contrast-bg {
    color: black;
    background-color: var(--pri-color);
    background-image: url("marble.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    h2 {
      color: var(--white-bg-h2);
    }
  }
`

export default function Home() {
  return (
    <>
      <Header/>
      <MainStyle>
        <div id="intro">
          <Hero/>
          <About className="container contrast-bg"/>
        </div>
        <PortfolioSection 
          id="portfolio"
          className="container home__section"/>
        <TestimonialSection
          id="testimonials"
          className="container contrast-bg"/>
        <ContactSection 
          id="contact"
          className="container home__section"/>
      </MainStyle>
      <Footer/>
    </>
  )
}